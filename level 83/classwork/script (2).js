age=prompt
alert('Please enter age' + age)
if (age > 80) {
       alert('დაბერდი ძმაო')
    } else if (age > 18) {
          alert('შენ ხარ სრულწოვანი')
    } else if (age > 12) {
        alert('შენ ხარ თინეიჯერი/მოზარდი')
    } else if (age > 5) {
        alert ('შენ ხარ ბავშვი')
    } 




    document.getElementById('calculateButton').addEventListener('click', function() {
        // მიღებული რიცხვები
        let num1 = parseFloat(document.getElementById('num1').value);
        let num2 = parseFloat(document.getElementById('num2').value);
        let operation = document.getElementById('operation').value;
        let result;
    
        // შემოწმება შეყვანილი მონაცემების სისწორეზე
        if (isNaN(num1) || isNaN(num2)) {
            alert('გთხოვთ, შეიყვანოთ სწორი რიცხვი');
            return;
        }
    
        // გამყოფის შემოწმება ნულზე
        if (operation === '/' && num2 === 0) {
            alert('ნული ვერ იქნება გამყოფი');
            return;
        }
    
        // ოპერაციის შესრულება
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                alert('გთხოვთ, აირჩიოთ სწორი ოპერაცია');
                return;
        }
    
        // შედეგის გამოყვანა
        document.getElementById('resultMessage').textContent = 'შედეგი: ' + result;
        console.log('შედეგი:', result);
    });
    