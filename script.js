// Массив для хранения задач
let tasks = [];

// Функция добавления задачи
function addTask() {
    const input = document.getElementById("newTaskInput");
    const taskText = input.value.trim();
    
    if (taskText) {
        tasks.push({
            text: taskText,
            completed: false
        });
        input.value = "";
        renderTasks();
    }
}

// Функция удаления задачи
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Функция переключения статуса задачи
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Функция отображения задач
function renderTasks() {
    const taskList = document.getElementById("taskList");
    const taskCounter = document.getElementById("taskCounter");
    taskList.innerHTML = "";
    
    // Подсчёт задач
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
    if (taskCounter) {
        taskCounter.innerHTML = \`✅ Всего: \${totalTasks} | 👍 Выполнено: \${completedTasks}\`;
    }
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        li.style.textDecoration = task.completed ? "line-through" : "none";
        li.style.opacity = task.completed ? "0.7" : "1";
        
        li.innerHTML = \`
            <span onclick="toggleTask(\${index})" style="cursor: pointer; flex-grow: 1;">
                \${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(\${index})">✖</button>
        \`;
        taskList.appendChild(li);
    });
}

// Добавление по Enter
document.getElementById("newTaskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Начальный рендеринг
renderTasks();
