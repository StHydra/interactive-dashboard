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