const database = [
  {
    name: "Adidas Originals",
    price: 939,
    sizes: [
      "EU 41",
      "EU 40"
    ],
    image: "./images/adidas.png",
    id: "29374892749",
    collection: "herr"
  },
  {
    name: "Shepherd",
    price: 1599,
    sizes: [
      "EU 45",
      "EU 43"
    ],
    image: "./images/1.png",
    id: "78917347982",
    collection: "dam"
  },
  {
    name: "Converse",
    price: 659,
    sizes: [
      "EU 40",
      "EU 41"
    ],
    image: "./images/converse.png",
    id: "2367492784628",
    collection: "unisex"
  }
]

document.querySelector("#query").addEventListener("keyup", (event) => {
  document.querySelector(".search-list").innerHTML = "";

  if (event.target.value === "") {
    document.querySelector(".search-suggestions").style.display = "none";
    return;
  } else {
    document.querySelector(".search-suggestions").style.display = "block";
  }

  const products = database.filter(function(obj) {
    return obj.name.toLowerCase().includes(event.target.value.toLowerCase());
  });

  products.forEach(product => {
    let li = document.createElement("li");
    li.innerHTML = `
      <a href="/${product.collection}.html">${product.name}</a>
    `;
    document.querySelector(".search-list").appendChild(li);
  });
});