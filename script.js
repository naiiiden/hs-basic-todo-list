document.getElementById("add-task-button").addEventListener("click", function() {
    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    if(document.getElementById("input-task").value === ""){
        alert("Enter something");
    }
    li.innerHTML = "<input type='checkbox'><span class='task'>" + document.getElementById("input-task").value + "</span><button class='delete-btn' onClick='this.parentNode.remove()'>Delete</button>";
    taskList.appendChild(li);
});
