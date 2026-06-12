const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- DUMMY PRODUCTS ---------------- */
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        description: "High performance laptop",
        image: "/images/laptop.jpg"
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 20000,
        description: "Latest smartphone",
        image: "/images/mobile.jpg"
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        description: "Wireless headphones",
        image: "/images/head phones.jpg"
    }
];

/* ---------------- API ---------------- */
app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running 🚀");
});

app.get("/products", (req, res) => {
    res.json(products);
});

/* ---------------- SERVER START ---------------- */
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});