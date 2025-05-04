// ტექსტის მიღება
let submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    let text = document.getElementById('userText').value;
    
    // ტექსტის სიგრძის შემოწმება
    if (text.length > 140) {
        text = text.substring(0, 140);
    }

    // ტექსტის გამოყვანა alert-ში
    alert(text);
});
