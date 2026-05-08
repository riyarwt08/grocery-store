const API_URL = "http://127.0.0.1:5000";

console.log("JS LOADED");
var productTable = document.getElementById('productTable');

function goToShop() {
    window.location.href = "index.html"; // or your list page
}


function loadShop() {
    fetch(API_URL + "/getProducts")
        .then(res => res.json())
        .then(data => {
            let html = "<div class='shop-grid'>";

            data.forEach(p => {
                html += `
                    <div class="product-card">
                        <h3>${p.name}</h3>
                        <p>₹ ${p.price_per_unit}</p>
                        <button>Add</button>
                    </div>
                `;
            });

            html += "</div>";

            document.getElementById("shopContainer").innerHTML = html;
        });
}


function loadProducts() {
    fetch("http://127.0.0.1:5000/getProducts")
        .then(response => response.json())
        .then(data => {
            productTable.innerHTML = "";

            data.forEach(product => {
                var row = `<tr>
                    <td>${product.product_id}</td>
                    <td>${product.name}</td>
                    <td>${product.uom_name}</td>
                    <td>${product.price_per_unit}</td>
                </tr>`;
                productTable.innerHTML += row;
            });
        });
}

function addProduct() {
    var name = document.getElementById("productName").value;
    var price = document.getElementById("productPrice").value;
    var uom = document.getElementById("productUom").value;

    fetch("http://127.0.0.1:5000/insertProduct", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            price_per_unit: parseFloat(price),
            uom_id: parseInt(uom)
        })
    }).then(() => {
        loadProducts();
    });
}

window.onload = loadProducts;

