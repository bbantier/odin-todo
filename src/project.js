export class Project {
  constructor(name) {
    this.name = name;
  }

  render() {
    const projectItem = document.createElement("li");

    projectItem.className = "project-item";

    return projectItem;
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

    return projectForm;
  }
}
