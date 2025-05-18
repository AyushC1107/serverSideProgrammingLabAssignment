function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
  
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button onclick="markCompleted(this)">Mark as Completed</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
  
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  
  function markCompleted(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector("span");
    taskText.classList.toggle("completed");
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
  }
  