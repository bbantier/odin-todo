import listIcon from "./list.svg";

export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
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

      localStorage.setItem(projectItem.name, JSON.stringify(projectItem));
      refreshProjectList();
    });

    return projectForm;
  }
}

export const refreshProjectList = () => {
  const projectList = document.querySelector(".project-list");
  const projectItems = document.querySelectorAll(".project-item");
  const projectForm = document.querySelector(".project-form");

  projectItems.forEach((element) => element.remove());
  if (projectForm) projectForm.remove();

  const renderProjectItem = (name) => {
    const projectItem = document.createElement("li");
    const icon = document.createElement("img");

    icon.src = listIcon;

    projectItem.className = "project-item";
    projectItem.append(icon);
    projectItem.textContent = name;

    return projectItem;
  };

  Object.keys(localStorage).forEach((key) => {
    const project = JSON.parse(localStorage.getItem(key));
    const projectItem = renderProjectItem(project.name);

    projectList.appendChild(projectItem);
  });
};
