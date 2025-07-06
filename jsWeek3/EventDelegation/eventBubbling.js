const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("itemList");

addBtn.addEventListener("click", () => {
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);
        input.value = "";
    }
});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        alert(`You clicked on: ${event.target.textContent}`);
    }
});