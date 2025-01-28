export class TodoItem {
  constructor(title, description, dueDate, priority = "2") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  render() {

  }
}

export class TodoForm {
  render() {
    const form = document.createElement("form");
    const titleInput = document.createElement("input");
    const dateInput = document.createElement("input");
    const descriptionArea = document.createElement("textarea");
    const priorityButton = document.createElement("button");

    form.className = "todo-form";

    titleInput.className = "title-input";
    titleInput.type = "text";
    titleInput.maxLength = 50;



  }
}