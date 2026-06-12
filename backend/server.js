const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Sample Users
let users = [
    {
        id: 1,
        email: "admin@gmail.com",
        password: "123456"
    }
];

// Sample Tasks
let tasks = [
    {
        id: 1,
        title: "Complete Internship Task",
        description: "Finish Task Management Application",
        priority: "High"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Task Management Backend Running 🚀");
});

// Get All Tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Create Task
app.post("/tasks", (req, res) => {
    const task = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority
    };

    tasks.push(task);
    res.json(task);
});

// Delete Task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task Deleted Successfully"
    });
});

// Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (user) {
        res.json({
            success: true,
            message: "Login Successful"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid Credentials"
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});