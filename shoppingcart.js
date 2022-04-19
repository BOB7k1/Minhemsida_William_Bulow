let cart = [];

let addToCartButton = document.querySelector(".add-to-cart-btn");
addToCartButton.addEventListener("click", addProductToCart);

let cartProductCount = document.querySelector(".cart-product-count");

function addProductToCart(event) {
    let product = event.target.getAttribute("data-id");
    let sizeSelector = document.querySelector(".size-selector");
    let size = "one size";
    if (sizeSelector) {
        size = sizeSelector.value;
    }
    cart.push( {
        id: product,
        size: size,
    });

    updateCart();
}

function updateCart() {
    cartProductCount.innerHTML = cart.length;
}