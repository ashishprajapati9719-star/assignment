
const heading = document.getElementById("heading");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function() {
    heading.textContent = "Button clicked";
});
