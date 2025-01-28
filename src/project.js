import listIcon from "./list.svg";

export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  render() {
    const projectItem = document.createElement("li");
    const icon = document.createElement("img");

    icon.src = listIcon;

    projectItem.className = "project-item";
    projectItem.append(icon);
    projectItem.textContent = this.name;

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

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectInput = document.querySelector(".project-input");
      const projectItem = new Project(projectInput.value);

      localStorage.setItem(projectItem.name, projectItem);
      refreshProjectList();
    });

    return projectForm;
  }
}

const refreshProjectList = () => {
  const projectList = document.querySelector(".project-list");
  const children = document.querySelectorAll(".project-item");

  children.forEach((element) => element.remove());

  Object.keys(localStorage).forEach((key) => {
    projectList.appendChild(new Project(key).render());
  })
};