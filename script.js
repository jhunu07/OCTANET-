document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = () => taskList.removeChild(taskItem);

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskInput.focus();
    });
});
