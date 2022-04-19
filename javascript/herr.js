let product;

for (let i = 0; i < database.length; i++) {
  if (database[i].id === "29374892749") {
    product = database[i];
  }
}

let div = document.createElement('div');
div.innerHTML = `
  <images>
    <img src="${product.image}" alt="">
  </images>
  <div class="title">
    <h4>${product.name}</h4>
  </div>
  <div class="container">
    <div class="top">
      <div class="brand-container">
        <a href="/se/search/adidas%20Originals">
          <span>
              <img src="https://images.footway.com/brand_logos/p3/adidasoriginals_logo_wbg.png?fwv=1.0&amp;auto=format,compress" alt="adidas Originals">
          </span>
        </a>
      </div>
      <div class="product-container">
        <h3>Swift Run X Ftwr White/ftwr White/ftwr Whi</h3>
        <p>${product.price} kr</p>
      </div>
    </div>
    <div class="bottom">
      <select class="size-selector">
        <option value="">Select size</option>
      </select>
      <button class="add-to-cart-btn" data-id="${product.id}">Lägg i varukorgen</button>
    </div>
  </div>
`;
for (let i = 0; i < product.sizes.length; i++) {
  const size = product.sizes[i];
  let option = document.createElement('option');
  option.value = product.id;
  option.innerText = size;
  div.querySelector(".size-selector").appendChild(option);
}
document.querySelector("main").appendChild(div)