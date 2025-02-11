import newTodo from "./todo";

const createProject = (name, id = crypto.randomUUID()) => {
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
    storedTodos.forEach((todo) => {
      project.todos.push(
        newTodo(todo.title, todo.description, todo.dueDate, todo.priority)
      );
    });

    console.log(storedTodos);
  };

  const render = (container) => {
    const listItem = document.createElement("li");

    listItem.id = project.id;
    listItem.className = "project-item";
    listItem.textContent = project.name;

    listItem.addEventListener("click", () => {
      const main = document.querySelector(".main");

      project.todos.forEach((todo) => todo.render(main));
      console.log(project.todos);
    });

    container.appendChild(listItem);
  };

  return Object.assign({}, project, { addTodo, store, refresh, render });
}
