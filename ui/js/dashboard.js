function loadDashboard() {
    fetch(API_URL + "/getDashboard")
        .then(res => res.json())
        .then(data => {
            document.getElementById("totalOrders").innerText = data.total_orders;
            document.getElementById("totalRevenue").innerText = data.total_revenue;
        });
}

window.onload = loadDashboard;

