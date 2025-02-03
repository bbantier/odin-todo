import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import "./project.css";
import { TodoItem, TodoForm } from "./todo";
import { Project, ProjectList, ProjectForm } from "./project";

const main = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");
const newProjectButton = document.querySelector(".new-project");

document.addEventListener("DOMContentLoaded", () => refreshUi());

newProjectButton.addEventListener("click", () => {
  const projectList = document.querySelector(".project-list");
  const projectForm = new ProjectForm().render();

  projectList.appendChild(projectForm);

  const projectInput = document.querySelector(".project-input");
  projectInput.focus();
});


export const refreshUi = () => {
  const oldList = document.querySelector(".project-list");
  if(oldList) oldList.remove();
  const projectList = new ProjectList();

  projectList.refresh();
  projectList.init();
  sidebar.insertBefore(projectList.render(), newProjectButton);
}
