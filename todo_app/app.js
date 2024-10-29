// Select the input, button, and task list elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Add task function
function addTask() {
  const taskText = taskInput.value.trim(); // Get input value and remove extra spaces

  if (taskText) {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    tasks.push(task); // Add new task to tasks array
    renderTasks(); // Render the updated list

    taskInput.value = ''; // Clear input field
  } else {
    alert('Please enter a task!');
  }
}

// Render tasks to the DOM
function renderTasks() {
  taskList.innerHTML = ''; // Clear current list

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';

    const taskText = document.createTextNode(task.text);
    li.appendChild(taskText);

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
    completeBtn.addEventListener('click', () => toggleTaskComplete(task.id));
    li.appendChild(completeBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Toggle task completion
function toggleTaskComplete(taskId) {
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      };
    }
    return task;
  });
  renderTasks();
}

// Delete task
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  renderTasks();
}

// Add task button click event
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
