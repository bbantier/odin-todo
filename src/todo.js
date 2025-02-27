import plusSvg from "./plus-dark.svg";
import { projectList } from "./app";
import { format } from "date-fns";
import trashIcon from "./trash.svg";
import projectObject from "./project";

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
    todoItem.id = todo.id;
    todoItem.innerHTML = `
      <div class="todo-item-left">
        <input type="checkbox">
        <h2 class="todo-title">${title}</h2>
      </div>
      <div class="todo-item-right">
        <div class="todo-priority">${priority}</div>
        <div class="todo-date">${dueDate}</div>
      </div>
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

    button.addEventListener("click", () => {
      const main = document.querySelector(".main");
      const form = todoForm();

      form.render(main);
      button.remove();
    });

    container.appendChild(button);
  };

  return { render };
};

export const todoForm = () => {
  const render = (container) => {
    const form = document.createElement("form");
    const formTop = document.createElement("div");
    const formBottom = document.createElement("div");

    const titleInput = document.createElement("input");
    const descriptionInput = document.createElement("textarea");
    const dateInput = document.createElement("input");
    const priorityInput = document.createElement("select");
    const addButton = document.createElement("button");

    const dateValue = format(new Date(), "yyyy-MM-dd");
    console.log(dateValue);

    form.className = "todo-form";
    formTop.className = "form-top";
    formBottom.className = "form-bottom";

    titleInput.placeholder = "Title";
    descriptionInput.placeholder = "Description";
    priorityInput.innerHTML = `
      <option>High</option>
      <option selected="true">Medium</option>
      <option>Low</option>
    `;

    dateInput.type = "date";
    dateInput.value = dateValue;

    addButton.textContent = "Add";
    addButton.type = "submit";

    formTop.append(titleInput, descriptionInput);
    formBottom.append(dateInput, priorityInput, addButton);

    form.append(formTop, formBottom);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const currentProject = projectList.getCurrentProject();

      currentProject.addTodo(
        titleInput.value,
        descriptionInput.value,
        dateInput.value,
        priorityInput.value
      );

      currentProject.store();
      form.remove();

      currentProject.refreshRenderedList();
    });

    container.appendChild(form);
  };

  return { render };
};
