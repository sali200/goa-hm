document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const noteInput = document.getElementById("noteInput");
    const saveNoteBtn = document.getElementById("saveNoteBtn");
    const calendar = document.getElementById("calendar");
    const loginBtn = document.getElementById("loginBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const toggleMode = document.getElementById("toggleMode");

    function loadTasks() {
        taskList.innerHTML = localStorage.getItem("tasks") || "";
    }

    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim()) {
            const li = document.createElement("li");
            li.textContent = taskInput.value;
            taskList.appendChild(li);
            localStorage.setItem("tasks", taskList.innerHTML);
            taskInput.value = "";
        }
    });

    saveNoteBtn.addEventListener("click", () => {
        localStorage.setItem("note", noteInput.value);
    });

    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (localStorage.getItem(username) === password) {
            alert("Login Successful!");
        } else {
            alert("Invalid Login!");
        }
    });

    signUpBtn.addEventListener("click", () => {
        localStorage.setItem(document.getElementById("username").value, document.getElementById("password").value);
        alert("Sign-Up Successful!");
    });

    toggleMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    loadTasks();
});