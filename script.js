// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get the trimmed value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Exit the function if the input is empty
        }

        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        // Use classList.add to add the 'remove-btn' class
        removeButton.classList.add('remove-btn');

        // Assign an onclick event to the remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove li from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        // Append the li to the task list
        taskList.appendChild(li);
        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for the Enter key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask when Enter is pressed
        }
    });
});
