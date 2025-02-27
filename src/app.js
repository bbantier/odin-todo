import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import "./project.css";
import newProject from "./project";

const newProjectButton = document.querySelector(".new-project");

const projectList = (() => {
  const list = [];
  let currentProject = list[0];

  const init = () => {
    Object.keys(localStorage).forEach((key) => {
      const storedProject = JSON.parse(localStorage.getItem(key));
      list.push(newProject(storedProject.name, key));
    });
  };

  const addProject = (name) => {
    const project = newProject(name);

    list.push(project);
    project.store();
  };

  const removeProject = (id) => {
    list.splice(list.map((project) => project.id).indexOf(id), 1);
    localStorage.removeItem(id);

    refreshUi();
  }

  const getProjectList = () => list;
  const getCurrentProject = () => currentProject;
  const setCurrentProject = (index) => {
    currentProject = list[index];
  }

  const render = (container, before) => {
    const listElement = document.createElement("ul");
    listElement.className = "project-list";

    container.insertBefore(listElement, before);
  };

  return { init, addProject, removeProject, getProjectList, getCurrentProject, setCurrentProject, render };
})();

const initUi = () => {
  const sidebar = document.querySelector(".sidebar");

  projectList.init();
  projectList.render(sidebar, newProjectButton);
  refreshUi();
};

const refreshUi = () => {
  const projectItems = document.querySelectorAll(".project-item");
  const main = document.querySelector(".main");

  projectItems.forEach((item) => item.remove());

  while (main.lastChild) main.removeChild(main.lastChild);

  projectList.getProjectList().forEach((project) => {
    const listElement = document.querySelector(".project-list");
    project.refresh();
    project.render(listElement);
  });
};

document.addEventListener("DOMContentLoaded", () => initUi());

newProjectButton.addEventListener("click", () => {
  const projectName = prompt("What do you want to call the new project?");

  if (!projectName) return;
  projectList.addProject(projectName);

  refreshUi();
});

export { projectList };