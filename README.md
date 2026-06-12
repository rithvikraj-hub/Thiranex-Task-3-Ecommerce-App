## Thiranex Internship - Task 3 E-Commerce Web Application
👨‍💻 Developed By

KARAKAMBADI RITHVIKRAJ

B.Tech Computer Science Student

#📌 Project Overview

This project is a full-stack E-Commerce Web Application developed as part of the Thiranex Internship Task 3.

It demonstrates a working product catalog system with backend APIs and a responsive frontend interface.

The backend is built using Node.js and Express.js, and the frontend uses HTML, CSS, and JavaScript to fetch and display products dynamically.

🚀 Features

#🛒 Frontend Features

Product listing page
Responsive UI design
Dynamic data rendering from API
Add to Cart functionality (basic alert system)

#⚙️ Backend Features

REST API using Express.js
Product GET endpoint
JSON response handling
CORS enabled

#📦 Product Features

Product catalog display
Name, price, description, image support
Dummy product data (MongoDB optional)

#🧰 Technologies Used

Frontend
HTML5
CSS3
JavaScript (Fetch API)
Backend
Node.js
Express.js
CORS

#📁 Project Structure

Thiranex-Task-3-Ecommerce-App/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
└── README.md

#⚙️ Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/your-username/Thiranex-Task-3-Ecommerce-App.git
2️⃣ Backend Setup
cd backend
npm install
3️⃣ Run Server
node server.js

Server will run at:

http://localhost:5000
🌐 API Endpoint
📦 Get All Products
GET /products

Example:

http://localhost:5000/products

#Response:

[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000,
    "description": "High performance laptop"
  }
]
#🖥️ Frontend Usage

Open:

frontend/index.html

#The page will:

Fetch data from backend API
Display products dynamically
Allow basic "Add to Cart" interaction

#🎯 Expected Outcome

Understanding of full-stack development
API integration with frontend
Basic e-commerce workflow
Real-world project structure experience

#📌 Notes

MongoDB is optional; dummy data is used for simplicity
Backend and frontend run locally
Ensure backend is running before opening frontend

#🏁 Internship Submission

This project was developed and submitted as part of the Thiranex Internship Program - Task 3: E-Commerce Web Application.
