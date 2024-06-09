// scripts.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const categoryInput = document.getElementById('categoryInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const priorityInput = document.getElementById('priorityInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>
            <strong>Task:</strong> ${taskInput.value} <br>
            <strong>Category:</strong> ${categoryInput.value} <br>
            <strong>Due Date:</strong> ${dueDateInput.value} <br>
            <strong>Priority:</strong> ${priorityInput.value}
        </span>
        <div>
            <button class="complete-btn" onclick="completeTask(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    categoryInput.value = 'Work';
    dueDateInput.value = '';
    priorityInput.value = 'Low';
}

function deleteTask(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}

function completeTask(button) {
    const li = button.parentNode.parentNode;
    li.classList.toggle('complete');
}
