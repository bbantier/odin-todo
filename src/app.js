import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import "./project.css";
import newProject from "./project";

const newProjectButton = document.querySelector(".new-project");
const newTodoButton = document.querySelector(".new-todo");

const projectList = (() => {
  const list = [];

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

  const getProjectList = () => list;

  const render = (container, before) => {
    const listElement = document.createElement("ul");
    listElement.className = "project-list";

    container.insertBefore(listElement, before);
  };

  return { init, addProject, getProjectList, render };
})();

const initUi = () => {
  const sidebar = document.querySelector(".sidebar");

  projectList.init();
  projectList.render(sidebar, newProjectButton);
  refreshUi();
};

const refreshUi = () => {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => item.remove());

  projectList.getProjectList().forEach((project) => {
    const listElement = document.querySelector(".project-list");
    project.refresh();
    project.render(listElement);
  });
};

document.addEventListener("DOMContentLoaded", () => initUi());

newProjectButton.addEventListener("click", () => {
  projectList.addProject(prompt());
  refreshUi();
});

// newTodoButton.addEventListener("click", () => {
//   projectList.getProjectList()[0].addTodo("test", "test", "test", "mid");
//   projectList.getProjectList()[0].store();
// });