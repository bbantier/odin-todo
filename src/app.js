import "./style.css";
import "./todo-form.css";
import "./todo-item.css";
import "./project.css";
import newProject from "./project";

const newProjectButton = document.querySelector(".new-project");

const projectList = (() => {
  const list = [];

  const init = () => {
    Object.keys(localStorage).forEach((key) => {
      const project = newProject(JSON.parse(localStorage.getItem(key)).name);
      list.push(project);
    });
  };

  const addProject = (name) => list.push(newProject(name));
  const getProjectList = () => list;

  const render = () => {
    const listElement = document.createElement("ul");
    listElement.className = "project-list";

    return listElement;
  };

  return { init, addProject, getProjectList, render };
})();

const initUi = () => {
  const sidebar = document.querySelector(".sidebar");
  projectList.init();
  sidebar.insertBefore(projectList.render(), newProjectButton);
  refreshUi();
};

const refreshUi = () => {
  const listElement = document.querySelector(".project-list");
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => item.remove());

  projectList.getProjectList().forEach((project) => {
    const listItem = document.createElement("li");

    listItem.id = project.id;
    listItem.className = "project-item";
    listItem.textContent = project.name;

    listElement.append(listItem);
  });
};

document.addEventListener("DOMContentLoaded", () => initUi());

newProjectButton.addEventListener("click", () => {
  projectList.addProject(prompt());
  console.log(projectList.getProjectList());
  refreshUi();
});

// newTodoButton.addEventListener("click", () => {
//   projectList.getProjectList()[0].addTodo("test", "test", "test", "mid");
// })