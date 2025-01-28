import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import "./project.css";
import { TodoItem, TodoForm } from "./todo";
import { Project, ProjectForm } from "./project";

const mainDiv = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");

// const todoForm = new TodoForm(); // remove
// mainDiv.appendChild(todoForm.render()); //remove

const todoItem = new TodoItem("This is a todo item", "", "2025-01-28", "High"); // remove
mainDiv.appendChild(todoItem.render()); // remove

const todoItemTwo = new TodoItem("This is a todo item", "", "2025-01-28", "High"); // remove
mainDiv.appendChild(todoItemTwo.render()); // remove


const projects = document.createElement("ul");
const projectForm = new ProjectForm();

projects.className = "project-list";
projects.appendChild(projectForm.render());

sidebar.appendChild(projects);