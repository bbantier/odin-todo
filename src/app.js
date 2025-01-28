import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import { TodoItem, TodoForm } from "./todo";

const mainDiv = document.querySelector(".main");

// const todoForm = new TodoForm(); // remove
// mainDiv.appendChild(todoForm.render()); //remove

const todoItem = new TodoItem("This is a todo item", "", "2025-01-28", "High"); // remove
mainDiv.appendChild(todoItem.render()); // remove

const todoItemTwo = new TodoItem("This is a todo item", "", "2025-01-28", "High"); // remove
mainDiv.appendChild(todoItemTwo.render()); // remove