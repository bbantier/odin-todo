export class TodoItem {
  constructor(title, description, dueDate, priority = "2") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  render() {}
}

export class TodoForm {
  constructor() {}

  render() {
    const form = document.createElement("form");

    const formTop = document.createElement("div");
    const titleInput = document.createElement("input");
    const descriptionInput = document.createElement("textarea");

    const formBottom = document.createElement("div");
    const dateInput = document.createElement("input");
    const prioritySelect = document.createElement("select");
    const priorityOptions = ["Priority", "High", "Medium", "Low"];

    form.className = "todo-form";

    formTop.className = "form-top";

    titleInput.className = "title-input";
    titleInput.type = "text";
    titleInput.maxLength = 50;
    titleInput.placeholder = "Title";

    descriptionInput.className = "description-input";
    descriptionInput.placeholder = "Description";

    formTop.append(titleInput, descriptionInput);

    formBottom.className = "form-bottom";

    dateInput.className = "date-input";
    dateInput.type = "text";
    dateInput.placeholder = "Due Date";
    dateInput.onfocus = function () {
      this.type = "date";
    };
    dateInput.onblur = function () {
      this.type = "text";
    };

    prioritySelect.className = "priority-select";

    priorityOptions.forEach((option) => {
      const priorityOption = document.createElement("option");
      priorityOption.textContent = option;
      prioritySelect.appendChild(priorityOption);
    });

    formBottom.append(dateInput, prioritySelect);

    form.append(formTop, formBottom);

    return form;
  }
}
