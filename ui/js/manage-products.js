/* IMAGE MAPPING (important) */
function getImage(name) {
    name = name.toLowerCase();

    if (name.includes("rice")) return "https://imgs.search.brave.com/s86QiM7vtw2B1gzRN52QU9dpbOUrvytH8_qj9j5uZoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/ODcwNzU0OC9waG90/by90aGUtamFzbWlu/ZS1yaWNlLXNlZWRz/LW9uLXRoZS13b21h/bi1oYW5kcy1yZXNl/bWJsZS1oZWFydHMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVJ0NmNIbzVxQnBN/eXVPTURNeUpLZFVn/YUd2aGNNZUtVbUNx/WWpfNU9vakU9";
    if (name.includes("banana")) return "https://imgs.search.brave.com/Or8PDf0hG-tKP4B5eqi_6FcQWefqBZz3ANDj2kLaQno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc5L2M5/LzJhLzc5YzkyYWI3/YTY2NGZkYTMxODg3/NjE3NjdlOTU3ZDcz/LmpwZw";
    if (name.includes("apple")) return "https://imgs.search.brave.com/gl0LIkmzS4DVKorD2WVRGGsuRq3KJ8JyAGdM1ysvuHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTEy/OTgwNzQ3My9waG90/by9oaWdoLWFuZ2xl/LXZpZXctb2YtaGFs/dmVkLWFwcGxlcy1v/bi1waW5rLWJhY2tn/cm91bmQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTdqTnJx/aVJhaFhtb0R2SDBz/UHNkaUs3Z1VlM3Nj/b0Q5azlQdXZPOTNn/Mk09";
    if (name.includes("onion")) return "https://imgs.search.brave.com/A-uRs5rxFOEc_UfISBJ3Pj_ZJSOSHhvklEwook8lmIY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIwLzEy/L0xNL0lDL0xGLzEx/ODg1MjgxNC8zLXBu/Zy0yNTB4MjUwLnBu/Zw";
    if (name.includes("mango")) return "https://imgs.search.brave.com/pK2P9tI1OOqrl8NFW5IK7W7JVkdQpknhswhG7RQmg10/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/NjY3NTQ4OS9waG90/by9yaXBlLWFuZC1q/dWljeS1kZWxpY2lv/dXMtbWFuZ28tb24t/YS1ibGFjay13b29k/ZW4tdGFibGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTlE/c3NyLUtTalNPNHZq/RW0xaE15RUllOUlr/QzNNeDBLVXdzNVht/ZEFleVk9";
    if (name.includes("chips")) return "https://imgs.search.brave.com/U3LJZEDCeEN69nHLBAWZ5teMwttFrSbqWfwPKw3KpZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/MDQyLzY5MC9zbWFs/bC9wb3RhdG8tY2hp/cHMtc25hY2tzLXVu/aGVhbHRoeS1mb29k/LWZvb2QtaG9tZS1w/aG90by5qcGVn";
    if (name.includes("ice cream")) return "https://imgs.search.brave.com/CJmflsD1EYkMizpXYqIj18_ZYldgAR7Gkm9VyQAZShQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgx/NzE3NDc2Ni9waG90/by9waW5rLWhvbWVt/YWRlLWljZS1jcmVh/bS5qcGc_Yj0xJnM9/NjEyeDYxMiZ3PTAm/az0yMCZjPThIMWdN/ZFJqQTJtY1ZKYnp1/dkdsbjB6c21SS3hk/XzFrVW1hajAwM1hm/SDg9";
    if (name.includes("soap")) return "https://imgs.search.brave.com/ByIIUGRIiHVwDWME4dqH7aHTsGhiRY9MPfZjwp5V16Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/MjY2ODY2L3Bob3Rv/L29yYW5nZS1zb2Fw/LWluLWEtZGlzaC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Ukczb2lKN2ZQOHAy/c29TUnppNnl6VWFZ/RENReDBtbHJDVHcx/eTlwZkREVT0";
    if (name.includes("tooth paste")) return "https://imgs.search.brave.com/wakTQUMh3tIRj5GjqsndlAna5pOQpG2z6-fyyxeprqY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90dWJl/LXRvb3RocGFzdGUt/NzIzODQ4MC5qcGc";
    if (name.includes("moong daal")) return "https://imgs.search.brave.com/NkslLxh_K7ERK6c1I4uewFtR5EB0uM3NC5AYHiScJHM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tb29u/cmljZS5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDcv/U3RvdmV0b3BNb29u/Z0RhbEJsb2ctMS5q/cGc";
    if (name.includes("okra")) return "https://imgs.search.brave.com/5cUPmlsicYsmBt5-otmQI6FOzHxlu6O3ruZmCKMZmq4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMzAv/MjAyMC8wMi9Pa3Jh/LTIwZGMyYmIuanBn/P3F1YWxpdHk9OTAm/cmVzaXplPTcwMCw2/MzY";
    if (name.includes("face mask")) return "https://imgs.search.brave.com/5DogNK9DKltvlTHCficOYufS715H1RLaBgPisSa4B_U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14M2h1/cjB4ZTRyL2ltYWdl/cy9zdGVuY2lsL29y/aWdpbmFsL2ltYWdl/LW1hbmFnZXIvZmFj/ZS1tYXNrLW5ldy1i/YW5uZXIxLWV6Z2lm/LmNvbS13ZWJwLXRv/LWpwZy1jb252ZXJ0/ZXIuanBnP3Q9MTc0/MjQ2NDQ1MA";
    if (name.includes("diaper")) return "https://imgs.search.brave.com/ocCuZsDCvXs1NlEEWRCKL0O---BMwQiVAz_4CG3YNHc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bHV2bGFwLmNvbS9j/ZG4vc2hvcC9maWxl/cy8xX2RiMmVhZTk5/LTA5M2YtNGU5NC04/ZGI2LTllZWMzZDM0/Y2YwYi5qcGc_dj0x/NzY1NzU3NTQ3Jndp/ZHRoPTUzMw";

    return "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400";
}

function loadProducts() {
    fetch(API_URL + "/getProducts")
        .then(res => res.json())
        .then(data => {

            let html = "";

            data.forEach(p => {
                html += `
                    <div class="card">
                        <img src="${getImage(p.name)}">
                        <div class="card-body">
                            <h3>${p.name}</h3>
                            <div class="price">₹ ${p.price_per_unit}</div>
                            <button onclick="addToCart(${p.product_id}, '${p.name}', ${p.price_per_unit})">
                                Add
                            </button>
                        </div>
                    </div>
                `;
            });

            document.getElementById("productList").innerHTML = html;
        })
        .catch(err => console.error("ERROR:", err));
}

/* ─── ADD TO CART ─── */
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
    
}

/* ─── START ─── */
window.onload = loadProducts;