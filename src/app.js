import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import "./project.css";
import { TodoItem, TodoForm } from "./todo";
import { Project, ProjectForm } from "./project";

const mainDiv = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");
const projectList = document.querySelector(".project-list");
const newProjectButton = document.querySelector(".new-project");

newProjectButton.addEventListener("click", () => {
  const projectForm = new ProjectForm;
  projectList.appendChild(projectForm.render());
})