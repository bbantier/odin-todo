import "./style.css";
import "./todo-form.css";
import { TodoForm } from "./todo";

const mainDiv = document.querySelector(".main");
const todoForm = new TodoForm;

mainDiv.appendChild(todoForm.render());