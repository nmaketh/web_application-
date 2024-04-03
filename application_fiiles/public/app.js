var taskCounter = 0;

// Function to update task numbers
function updateTaskNumbers() {
    var tasks = document.querySelectorAll('.task-text');
    for (var i = 0; i < tasks.length; i++) {
        var taskText = tasks[i].textContent;
        var taskNumber = taskText.indexOf('. ');
        if (taskNumber !== -1) {
            tasks[i].textContent = (i + 1) + '. ' + taskText.substring(taskNumber + 2);
        }
    }
}

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
  
    if (taskText === '') {
        return; // Do nothing if the input is empty
    }
  
    var taskTemplate = document.getElementById('task-template');
    var taskList = document.getElementById('task-list');
  
    var newTask = taskTemplate.content.cloneNode(true);
    newTask.querySelector('.task-text').textContent = ++taskCounter + '. ' + taskText;

    // Remove the 'hidden' class from the buttons
    newTask.querySelector('.complete-button').classList.remove('hidden');
    newTask.querySelector('.edit-button').classList.remove('hidden');
    newTask.querySelector('.delete-button').classList.remove('hidden');
  
    taskList.appendChild(newTask);
  
    taskInput.value = '';

    // Update task numbers
    updateTaskNumbers();
});

// Add event listeners for the buttons to the task list
document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-button')) {
        event.target.parentElement.querySelector('.task-text').classList.add('completed');
    } else if (event.target.classList.contains('delete-button')) {
        // Remove the task
        this.removeChild(event.target.parentElement);

        // Update task numbers
        updateTaskNumbers();
    } else if (event.target.classList.contains('edit-button')) {
        var newText = prompt('Edit task', event.target.parentElement.querySelector('.task-text').textContent);
        if (newText !== null) {
            event.target.parentElement.querySelector('.task-text').textContent = newText;
        }
    }
});