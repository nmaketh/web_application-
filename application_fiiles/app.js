document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    var li = document.createElement('li');
    var taskText = document.createElement('span');
    taskText.textContent = taskInput.value;
    li.appendChild(taskText);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', function() {
        var newTask = prompt('Edit Task', taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
        }
    });
    li.appendChild(editButton);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
});