const products = [
  { id: 1, name: "Denim Jacket", price: 1200, img: "https://via.placeholder.com/200x250?text=Denim+Jacket" },
  { id: 2, name: "Summer Dress", price: 999, img: "https://via.placeholder.com/200x250?text=Summer+Dress" },
  { id: 3, name: "Casual Shoes", price: 1500, img: "https://via.placeholder.com/200x250?text=Casual+Shoes" },
];

let cartCount = 0;

function displayProducts() {
  const container = document.getElementById("products");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
}

window.onload = displayProducts;