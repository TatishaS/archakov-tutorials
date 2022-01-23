const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const listItems = document.querySelector('.list__items');

let tasks = [];

// функция render(), которая при каждом вызове будет пробегаться по массиву tasks и рендерить список задач внутри <ul>.
const render = () => {
  listItems.innerHTML = '';
  let renderedTask = '';

  if (tasks.length > 0) {
    tasks.forEach((task, i) => {
      renderedTask += `
      <li class="list__item">
      <strong>${task}</strong><button class="item__btn" onclick="handleClickRemove(${i})">X</button>
    </li>`;

      listItems.innerHTML = renderedTask;
    });
  }
};

if (localStorage.getItem('todolist')) {
  tasks = JSON.parse(localStorage.getItem('todolist'));
  render();
}

//handleClickRemove(index) - функция, которая будет получать индекс задачи и удалять её по индексу.

// Version #1
/* const handleClickRemove = index => {
  tasks.splice(index, 1);
  updateStorage();
  render();
}; */

// Version #2
const handleClickRemove = index => {
  const newTasksArr = tasks.filter((_, i) => {
    if (index !== i) {
      return true;
    } else {
      return false;
    }
  });

  tasks = newTasksArr;
  updateStorage();
  render();
};

const updateStorage = () => {
  localStorage.setItem('todolist', JSON.stringify(tasks));
};

//handleClickAdd() - функция, которая будет брать из инпута значение и добавлять в конец массива эту задачу.
const handleClickAdd = () => {
  let newToDo = formInput.value;
  if (newToDo) {
    tasks.push(newToDo);

    updateStorage();
    render();

    formInput.value = '';
    console.log(tasks);
  } else {
    alert('Напишите дело');
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  handleClickAdd();
});
