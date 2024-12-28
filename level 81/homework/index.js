document.getElementById('greetButton').addEventListener('click', function() {
    let name = document.getElementById('userName').value;
    if (name.length > 0) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    let greeting = "Hello " + name;

    document.getElementById('greetingMessage').textContent = greeting;
    alert(greeting);
});
