document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("✅ რეგისტრაცია წარმატებულია!");
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
        alert("🔓 ავტორიზაცია წარმატებულია!");
    } else {
        alert("❌ არასწორი მონაცემები!");
    }
});