let products = [];

/* ───────── LOAD PRODUCTS FROM BACKEND ───────── */
function loadProducts() {
    fetch(API_URL + "/getProducts")
        .then(res => res.json())
        .then(data => {
            products = data;

            // after products loaded → load cart
            loadCart();
        })
        .catch(err => console.error("Fetch error:", err));
}

/* ───────── ADD ROW (USED FOR BOTH MANUAL + CART) ───────── */
function addRow(productId = "", quantity = 1, price = 0) {

    const table = document.querySelector("#orderTable tbody");

    let options = products.map(p =>
        `<option value="${p.product_id}" data-price="${p.price_per_unit}">
            ${p.name}
        </option>`
    ).join("");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <select onchange="updateRow(this)">
                <option value="">Select</option>
                ${options}
            </select>
        </td>
        <td>
            <input type="number" value="${quantity}" min="1" onchange="updateRow(this)">
        </td>
        <td class="price">${price}</td>
        <td class="total">${price * quantity}</td>
        <td>
            <button onclick="removeRow(this)">X</button>
        </td>
    `;

    table.appendChild(row);

    if (productId) {
        row.querySelector("select").value = productId;
    }
}

/* ───────── LOAD CART INTO TABLE ───────── */
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        addRow(); // empty row if no cart
        return;
    }

    cart.forEach(item => {
        addRow(item.id, item.quantity, item.price);
    });

    calculateTotal();
}

/* ───────── UPDATE ROW ───────── */
function updateRow(element) {
    const row = element.closest("tr");

    const select = row.querySelector("select");
    const quantity = parseFloat(row.querySelector("input").value) || 0;

    const selectedOption = select.options[select.selectedIndex];
    const price = parseFloat(selectedOption.dataset.price) || 0;

    row.querySelector(".price").innerText = price;
    row.querySelector(".total").innerText = price * quantity;

    calculateTotal();
}

/* ───────── REMOVE ROW ───────── */
function removeRow(btn) {
    btn.closest("tr").remove();
    calculateTotal();
}

/* ───────── CALCULATE TOTAL ───────── */
function calculateTotal() {
    let total = 0;

    document.querySelectorAll(".total").forEach(cell => {
        total += parseFloat(cell.innerText) || 0;
    });

    document.getElementById("grandTotal").innerText = total;
}

/* ───────── PLACE ORDER ───────── */
function placeOrder() {
    const customerName = document.getElementById("customerName").value;

    if (!customerName) {
        alert("Enter customer name");
        return;
    }

    let orderDetails = [];

    document.querySelectorAll("#orderTable tbody tr").forEach(row => {
        const productId = row.querySelector("select").value;
        const quantity = row.querySelector("input").value;
        const total = row.querySelector(".total").innerText;

        if (productId) {
            orderDetails.push({
                product_id: parseInt(productId),
                quantity: parseInt(quantity),
                total_price: parseFloat(total)
            });
        }
    });

    if (orderDetails.length === 0) {
        alert("Select at least one product");
        return;
    }

    const data = {
        customer_name: customerName,
        total: parseFloat(document.getElementById("grandTotal").innerText),
        order_details: orderDetails
    };

    fetch(API_URL + "/insertOrder", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        alert("Order placed! ID: " + data.order_id);

        // clear cart after order
        localStorage.removeItem("cart");

        location.reload();
    })
    .catch(err => console.error("Order error:", err));
}

/* ───────── START ───────── */
window.onload = loadProducts;