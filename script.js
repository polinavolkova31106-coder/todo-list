// Массив для хранения задач
let tasks = [];

// Функция добавления задачи
function addTask() {
    const input = document.getElementById("newTaskInput");
    const taskText = input.value.trim();
    
    if (taskText) {
        tasks.push(taskText);
        input.value = "";
        renderTasks();
    }
}

// Функция удаления задачи
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Функция отображения задач
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = \`
            \${task}
            <button class="delete-btn" onclick="deleteTask(\${index})">✖</button>
        \`;
        taskList.appendChild(li);
    });
}

// Добавляем возможность добавления по нажатию Enter
document.getElementById("newTaskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
