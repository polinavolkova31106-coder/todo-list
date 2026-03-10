let tasks = [];

function addTask() {
    const input = document.getElementById("newTaskInput");
    const taskText = input.value.trim();
    
    if (taskText) {
        tasks.push(taskText);
        input.value = "";
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

document.getElementById("newTaskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
