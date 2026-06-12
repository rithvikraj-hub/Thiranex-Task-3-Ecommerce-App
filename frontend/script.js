const API_URL = "http://localhost:5000/products";

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCartCount();
});

async function loadProducts() {
    try {
        const res = await fetch(API_URL);
        const products = await res.json();

        const container = document.getElementById("products");
        container.innerHTML = ""; // clear old content

        products.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product");

            div.innerHTML = `
                <img src="${product.image}" width="150" height="150" />
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>₹${product.price}</p>
                <button onclick="addToCart('${product.name}')">
                    Add to Cart
                </button>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

/* ---------------- CART FUNCTION ---------------- */

function addToCart(name) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(name);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart 🛒");
}

/* ---------------- CART COUNT ---------------- */

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let countElement = document.getElementById("cartCount");

    if (countElement) {
        countElement.innerText = cart.length;
    }
}