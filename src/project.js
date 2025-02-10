const createProject = (name) => {
  const id = crypto.randomUUID();
  const todos = [];

  return { name, id, todos};
}

export default function addProject (name) {
  const project = createProject(name);
  localStorage.setItem(project.id, JSON.stringify(project));

  return Object.assign({}, project);
}