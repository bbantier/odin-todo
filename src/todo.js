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
    const dateButton = document.createElement("button");
    const prioritySelect = document.createElement("select");
    const priorityOptions = ["High", "Medium", "Low"];

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

    dateButton.className = "date-button";
    dateButton.type = "button";
    dateButton.textContent = "Date";

    prioritySelect.className = "priority-select";

    priorityOptions.forEach((option) => {
      const priorityOption = document.createElement("option");

      priorityOption.textContent = option;
      priorityOption.selected = option === "Medium" ? "selected" : "";
      prioritySelect.appendChild(priorityOption);
    });

    formBottom.append(dateButton, prioritySelect);

    form.append(formTop, formBottom);

    return form;
  }
}
