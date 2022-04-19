let cartProductCount = document.querySelector(".cart-product-count");
let total = 0;

let cart = localStorage.cart || [];
if (cart.length > 0) {
  cart = JSON.parse(cart);
  cartProductCount.innerHTML = cart.length;
}

for (let i = 0; i < cart.length; i++) {
  const item = cart[i];

  const product = database.filter(function(obj) {
    return obj.id === item;
  });

  let li = document.createElement("li");
  li.innerHTML = `
    <img class="cart-image" src="${product[0].image}">
    <div class="cart-name-container">
      <span class="cart-name">${product[0].name}</span>
      <span class="cart-price">${product[0].price}</span>
    </div>
  `;
  document.querySelector(".list").appendChild(li);

  total += product[0].price;
}

document.querySelector(".total").innerHTML = total;

document.querySelector(".clear").addEventListener("click", () => {
  cart = [];
  localStorage.setItem("cart", cart);
  cartProductCount.innerHTML = cart.length;
  document.querySelector(".list").innerHTML = '';

  total = 0;
  document.querySelector(".total").innerHTML = total;
});