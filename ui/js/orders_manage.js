function loadOrders() {
    fetch(API_URL + "/getOrders")
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("ordersTable");
            table.innerHTML = "";

            data.forEach(order => {
                let row = `<tr>
                    <td>${order.order_id}</td>
                    <td>${order.customer_name}</td>
                    <td>${order.total}</td>
                    <td>
                        <button onclick="deleteOrder(${order.order_id})">Delete</button>
                    </td>
                </tr>`;
                table.innerHTML += row;
            });
        });
}

function deleteOrder(orderId) {
    fetch(API_URL + "/deleteOrder", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id: orderId })
    }).then(() => {
        loadOrders();
    });
}

window.onload = loadOrders;