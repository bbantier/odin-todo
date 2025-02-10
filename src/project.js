import newTodo from "./todo";

const createProject = (name) => {
  const id = crypto.randomUUID();
  const todos = [];

  return { name, id, todos };
};

export default function addProject(name) {
  const project = createProject(name);
  localStorage.setItem(project.id, JSON.stringify(project));

  const addTodo = (title, description, dueDate, priority) => {
    const todo = newTodo(title, description, dueDate, priority);
    project.todos.push(todo);
    localStorage.setItem(project.id, JSON.stringify(project));
  };

  return Object.assign({}, project, { addTodo });
}
