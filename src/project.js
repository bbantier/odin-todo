import newTodo, { todoButton } from "./todo";
import listSvg from "./list.svg";
import trashSvg from "./trash.svg";
import { projectList } from "./app";

const createProject = (
  name,
  id = `project-${projectList.getProjectList().length + 1}`
) => {
  const todos = [];

  return { name, id, todos };
};

export default function addProject(name, id) {
  const project = createProject(name, id);

  const addTodo = (title, description, dueDate, priority) => {
    const todo = newTodo(title, description, dueDate, priority);
    project.todos.push(todo);
  };

  const removeTodo = (id) => {
    const currentProject = projectList.getCurrentProject();
    const todos = currentProject.todos;

    todos.splice(todos.map((todo) => todo.id).indexOf(id), 1);
    currentProject.store();
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
    const listItemLeftDiv = document.createElement("div");
    const listIcon = document.createElement("img");
    const listItemTitle = document.createElement("p");
    const deleteButton = document.createElement("img");

    listItem.id = project.id;
    listItem.className = "project-item";

    listIcon.src = listSvg;

    listItemTitle.textContent = project.name;

    listItemLeftDiv.append(listIcon, listItemTitle);
    listItemLeftDiv.addEventListener("click", () => {
      refreshRenderedList();
    });

    deleteButton.src = trashSvg;
    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to remove this project?")) {
        projectList.removeProject(project.id);
      } else {
        return;
      }
    });

    listItem.append(listItemLeftDiv, deleteButton);
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
    removeTodo,
    store,
    refresh,
    render,
    refreshRenderedList,
  });
}
