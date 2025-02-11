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

  const storeProject = () => {
    localStorage.setItem(project.id, JSON.stringify(project));
  }

  const render = (container) => {
    const listItem = document.createElement("li");

    listItem.id = project.id;
    listItem.className = "project-item";
    listItem.textContent = project.name;

    container.appendChild(listItem);
  }

  return Object.assign({}, project, { addTodo, storeProject, render });
}