import plusSvg from "./plus-dark.svg";

const createTodo = (title, description, dueDate, priority) => {
  const id = crypto.randomUUID();
  let done = false;

  return { id, done, title, description, dueDate, priority };
};

export default function addTodo(title, description, dueDate, priority) {
  const todo = createTodo(title, description, dueDate, priority);

  const render = (container) => {
    const todoItem = document.createElement("div");

    todoItem.className = "todo-item";
    todoItem.innerHTML = `
      <div class="todo-item-left">
        <input type="checkbox">
        <h2 class="todo-title">${title}</h2>
      </div>
      <div class="todo-date">${dueDate}</div>
    `;

    container.appendChild(todoItem);
  };
  return Object.assign({}, todo, { render });
}

export const todoButton = () => {
  const render = (container) => {
    const button = document.createElement("div");
    const plusIcon = document.createElement("img");

    button.className = "new-todo";
    button.textContent = "Add todo";

    plusIcon.src = plusSvg;
    button.prepend(plusIcon);

    container.appendChild(button);
  };

  return { render };
};
