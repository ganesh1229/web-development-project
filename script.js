function showMessage() {
    alert("Welcome to the Modern Web Development Page!");
}

function changeTheme() {
    document.body.classList.toggle("dark-mode");
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Form Submitted Successfully!");
});
