const createProject = (name) => {
  const id = crypto.randomUUID();
  const todos = [];

  return { name, id, todos};
}

export default function addProject (name) {
  const project = createProject(name);

  return Object.assign({}, project);
}