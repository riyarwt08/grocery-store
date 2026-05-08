let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {

    const existingProduct = cart.find(
        item => item.product_id === product.product_id
    );

    if(existingProduct){

        existingProduct.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity:1
        });

    }

    saveCart();

    alert(product.product_name + " added to basket");
}

function getCartTotal(){

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

    });

    return total;
}

function removeFromCart(productId){

    cart = cart.filter(
        item => item.product_id !== productId
    );

    saveCart();

    location.reload();
}

function updateQuantity(productId, change){

    const product = cart.find(
        item => item.product_id === productId
    );

    if(product){

        product.quantity += change;

        if(product.quantity <= 0){

            removeFromCart(productId);

            return;
        }

    }

    saveCart();

    location.reload();
}