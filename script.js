const taskInput = document.getElementById('inputBox');
const addButton = document.getElementById('add');
const taskList = document.getElementById('toDoContent');

function createTask() {
  const taskText = taskInput.value;
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="doneButton">Done</button>
    <button class="deleteButton">Delete</button>
  `;

  const doneButton = taskItem.querySelector('.doneButton');
  doneButton.addEventListener('click', function () {
    const taskSpan = taskItem.querySelector('span');
    taskSpan.classList.toggle('completed');
    taskSpan.style.fontWeight = taskSpan.classList.contains('completed') ? 'bold' : 'normal';
    taskSpan.style.textDecoration = taskSpan.classList.contains('completed') ? 'line-through' : 'none';
  });

  const deleteButton = taskItem.querySelector('.deleteButton');
  deleteButton.addEventListener('click', function () {
    taskItem.parentNode.removeChild(taskItem);
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

addButton.addEventListener('click', createTask);

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    createTask();
  }
});