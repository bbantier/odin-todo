import { refreshUi } from "./app";

export class Project {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todos = [];
  }
}

export class ProjectList {
  constructor() {
    this.projects = [];
  }

  init() {
    Object.keys(localStorage).forEach((key) => {
      const project = JSON.parse(localStorage.getItem(key));
      this.projects.push(project);
    });
  }

  refresh() {
    const projectForm = document.querySelector(".project-form");
    if (projectForm) projectForm.remove();

    this.render();
  }

  render() {
    const projectList = document.createElement("ul");

    projectList.className = "project-list";

    this.projects.forEach((project) => {
      const projectItem = document.createElement("li");

      projectItem.className = "project-item";
      projectItem.textContent = project.name;

      projectList.appendChild(projectItem);
    });

    return projectList;
  }
}

export class ProjectForm {
  constructor() {}

  render() {
    const projectForm = document.createElement("form");
    const projectInput = document.createElement("input");

    projectForm.className = "project-form";

    projectInput.className = "project-input";
    projectInput.placeholder = "Project name";

    projectForm.appendChild(projectInput);

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectInput = document.querySelector(".project-input");
      const project = new Project(projectInput.value);

      localStorage.setItem(project.id, JSON.stringify(project));
      refreshUi();
    });

    return projectForm;
  }
}