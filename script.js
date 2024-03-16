function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = '<input type="checkbox" onchange="toggleCompleted(this)">' + taskText;
        taskList.appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function toggleCompleted(checkbox) {
    var listItem = checkbox.parentNode;
    if (checkbox.checked) {
        listItem.classList.add("completed");
    } else {
        listItem.classList.remove("completed");
    }
}
