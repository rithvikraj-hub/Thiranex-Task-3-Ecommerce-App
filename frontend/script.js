console.log("Task App Connected to Backend 🚀");

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Load tasks from backend
async function loadTasks() {
    const res = await fetch("http://localhost:5000/tasks");
    const tasks = await res.json();

    taskList.innerHTML = "";

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-item");

        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span>Priority: ${task.priority}</span>
            <br><br>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;

        taskList.appendChild(taskDiv);
    });
}

// Add task to backend
taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const priority = document.getElementById("taskPriority").value;

    await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, description, priority })
    });

    taskForm.reset();
    loadTasks();
});

// Delete task from backend
async function deleteTask(id) {
    await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

// Initial load
loadTasks();