// A very simple (and non-secure) login for demonstration only.
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const username = this.elements[0].value;
    const password = this.elements[1].value;

    // This is a fake check. In a real site, this would be done on a server.
    if (username === "admin" && password === "password") {
        document.getElementById('loginMessage').textContent = "Login Successful!";
        document.getElementById('loginMessage').style.color = "green";
    } else {
        document.getElementById('loginMessage').textContent = "Invalid username or password.";
        document.getElementById('loginMessage').style.color = "red";
    }
});

// List of activities - you can change these!
const activities = [
    "Team Meeting at 10:00 AM",
    "Code Review Session",
    "Client Project Brainstorming",
    "Weekly Yoga Class",
    "Deploy New Website Feature"
];

// Display the activities on the page
const activitiesListElement = document.getElementById('activitiesList');

activities.forEach(activity => {
    const listItem = document.createElement('li');
    listItem.textContent = activity;
    activitiesListElement.appendChild(listItem);
});