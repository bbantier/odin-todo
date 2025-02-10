const createTodo = (title, description, dueDate, priority) => {
  const id = crypto.randomUUID();

  return { id, title, description, dueDate, priority };
}

export default function addTodo(title, description, dueDate, priority) {
  const todo = createTodo(title, description, dueDate, priority);

  return Object.assign({}, todo);
}