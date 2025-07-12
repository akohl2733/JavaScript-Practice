// Debounce function
function debounce(func, delay){
    let timeoutID;
    return function (...args){
        clearTimeout(timeoutID);
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

// Get search box input element
const searchBox = document.getElementById("search-box");  // Element

// Define handler function
function handleSearchInput(event){
    console.log("Searching for:", event.target.value);
}

// Create debounced version of the handler
const debouncedSearch = debounce(handleSearchInput, 1000);

// Attach it to the inpyt event
searchBox.addEventListener("input", debouncedSearch);


// -------------------------------------------


function changeColor(newColor) {
    const elem = document.getElementById("top-text");
    elem.style.color = newColor;

    // set local storage color to chosen color when loading in
    localStorage.setItem("preferredColor", newColor);
}

document.querySelectorAll("button")
    .forEach((button) => {
        button.addEventListener("click", (event) => {
            const color = event.target.textContent.toLowerCase();
            changeColor(color);
        })
    })

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    const newTheme = currentTheme === "dark" ? "light" : 'dark';

    document.body.classList.remove(`${currentTheme}-mode`);
    document.body.classList.add(`${newTheme}-mode`);

    localStorage.setItem("preferredTheme", newTheme);
})

// get local storage item when loading in
window.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("preferredColor");
    const savedTheme = localStorage.getItem("preferredTheme");

    if (savedColor) {
        changeColor(savedColor);
    }

    if (savedTheme) {
        document.body.classList.remove("light-mode", "dark-mode");
        document.body.classList.add(`${savedTheme}-mode`);
    }
});