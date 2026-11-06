
const note = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");

// Show saved text when page opens
note.value = localStorage.getItem("note") || "";

// Save text in local storage
saveBtn.addEventListener("click", function() {
    localStorage.setItem("note", note.value);
});
