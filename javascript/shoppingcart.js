let cartProductCount = document.querySelector(".cart-product-count");
let addToCartButton = document.querySelector(".add-to-cart-btn");
addToCartButton.addEventListener("click", addProductToCart);

let cart = localStorage.cart || [];
if (cart.length > 0) {
    cart = JSON.parse(cart);
    cartProductCount.innerHTML = cart.length;
}

function addProductToCart(event) {
    let product = event.target.getAttribute("data-id");
    if (!cart.includes(product)) {
        cart.push(product);
        updateCart();
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

function updateCart() {
    cartProductCount.innerHTML = cart.length;
}