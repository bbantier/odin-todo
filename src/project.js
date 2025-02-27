import newTodo, { todoButton } from "./todo";
import listSvg from "./list.svg";
import { projectList } from "./app";

const createProject = (name, id = `project-${projectList.getProjectList().length + 1}`) => {
  const todos = [];

  return { name, id, todos };
};

export default function addProject(name, id) {
  const project = createProject(name, id);

  const addTodo = (title, description, dueDate, priority) => {
    const todo = newTodo(title, description, dueDate, priority);
    project.todos.push(todo);
  };

  const store = () => {
    localStorage.setItem(project.id, JSON.stringify(project));
  };

  const refresh = () => {
    const storedTodos = JSON.parse(localStorage.getItem(project.id)).todos;

    project.todos = [];
    storedTodos.forEach((todo) => {
      project.todos.push(
        newTodo(todo.title, todo.description, todo.dueDate, todo.priority)
      );
    });
  };

  const render = (container) => {
    const listItem = document.createElement("li");

    listItem.innerHTML = `
      <div>
        <img src="${listSvg}">
        ${project.name}
      </div>  
    `;

    listItem.id = project.id;
    listItem.className = "project-item";

    listItem.addEventListener("click", () => {
      refreshRenderedList();
    });

    container.appendChild(listItem);
  };

  const refreshRenderedList = () => {
    const main = document.querySelector(".main");
    const todoItems = document.querySelectorAll(".todo-item");
    const oldButton = document.querySelector(".new-todo");
    const button = todoButton();
    const currentProjectIndex = projectList
      .getProjectList()
      .map((object) => object.id)
      .indexOf(project.id);

    projectList.setCurrentProject(currentProjectIndex);

    todoItems.forEach((item) => item.remove());
    if (oldButton) oldButton.remove();

    project.todos.forEach((todo) => todo.render(main));
    button.render(main);
  };

  return Object.assign({}, project, {
    addTodo,
    store,
    refresh,
    render,
    refreshRenderedList,
  });
}
