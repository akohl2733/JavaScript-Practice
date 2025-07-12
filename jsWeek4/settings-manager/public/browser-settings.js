// save button
document.getElementById("save-btn")
    .addEventListener("click", () => {
        const theme = document.getElementById("theme").value;
        const username = document.getElementById("username").value;

        const settings = { theme, username};
        localStorage.setItem("settingsObject", JSON.stringify(settings));

        alert("Settings saved!");
    });

window.addEventListener("DOMContentLoaded", () => {
    const settings = JSON.parse(localStorage.getItem("settingsObject")) || "{}";

    if (settings.theme) {
        document.getElementById("theme").value = settings.theme;
    }
    if (settings.username) {
        document.getElementById("username").value = settings.username;
    }
});