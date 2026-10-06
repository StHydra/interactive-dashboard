// Global array to track tasks
let myTasks = [];

// Create and append the unordered list element to the "task-list" div
let taskListUl = document.createElement("ul");
taskListUl.id = "user-tasks";
document.getElementById("task-list").appendChild(taskListUl);

// Handle the "Add Task" button click
document.getElementById("add-task").addEventListener("click", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Capture the string from the input field
    let taskName = document.getElementById("task-name").value;

    if (taskName.trim() !== "") {
        // Store the task in the myTasks array
        myTasks.push(taskName);

        // Create a new list item element
        let listItem = document.createElement("li");
        
        // Assemble the list item with the task text and append it to the <ul>
        listItem.textContent = taskName;
        taskListUl.appendChild(listItem);

        // Clear the input field for the next entry
        document.getElementById("task-name").value = "";
    }
});

// Calculate the total weekly task goal for a user.
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Calculate the weekly goal using 5 workdays.
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to the weekly goal.
    let totalGoal = weeklyGoal + bonusTasks;

    // Create the output message.
    let output = "User: " + userName + "<br>" +
                 "Total Weekly Goal: " + totalGoal;

    // Display the output in the goal-message element.
    document.getElementById("goal-message").innerHTML = output;
}

// Handle the goal button click.
document.getElementById("goal-btn").addEventListener("click", function(event) {
    // Prevent the form from being submitted.
    event.preventDefault();

    // Get the values entered by the user.
    let userName = document.getElementById("name").value;
    let dailyGoal = Number(document.getElementById("daily-goal").value);
    let bonusTasks = Number(document.getElementById("weekly-bonus").value);

    // Call the weeklyGoal function with the user's values.
    weeklyGoal(userName, dailyGoal, bonusTasks);
});