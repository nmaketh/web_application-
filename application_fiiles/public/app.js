var taskCounter = 0; // Add this line

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
    newTask.querySelector('.task-text').textContent = ++taskCounter + '. ' + taskText; // Update this line

    // Remove the 'hidden' class from the buttons
    newTask.querySelector('.complete-button').classList.remove('hidden');
    newTask.querySelector('.edit-button').classList.remove('hidden');
    newTask.querySelector('.delete-button').classList.remove('hidden');
  
    taskList.appendChild(newTask);
  
    taskInput.value = '';
});

// Add event listeners for the buttons to the task list
document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-button')) {
        event.target.parentElement.querySelector('.task-text').classList.add('completed');
    } else if (event.target.classList.contains('delete-button')) {
        this.removeChild(event.target.parentElement);
    } else if (event.target.classList.contains('edit-button')) {
        var newText = prompt('Edit task', event.target.parentElement.querySelector('.task-text').textContent);
        if (newText !== null) {
            event.target.parentElement.querySelector('.task-text').textContent = newText;
        }
    }
});