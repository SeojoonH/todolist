const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;


function updateToDo (e) {
  e.target.classList.toggle('done');
}

for (let item of items) {
  item.addEventListener('click', updateToDo);
}