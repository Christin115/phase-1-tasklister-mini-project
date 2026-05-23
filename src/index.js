document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const task = document.getElementById("new-task-description").value;

  buildToDo(task);
}

function buildToDo(task) {

  const taskList = document.getElementById("tasks");

  const li = document.createElement("li");

  li.textContent = task;

  taskList.appendChild(li);
}
});
