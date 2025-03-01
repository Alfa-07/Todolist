document.getElementById("addTaskButton").addEventListener("click", addTask);

        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskList = document.getElementById("taskList");
            const taskText = taskInput.value.trim();

            if (taskText === "") return;

            const li = document.createElement("li");
            li.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(li);
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = "";
        }