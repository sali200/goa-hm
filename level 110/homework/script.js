// Selecting elements with different DOM methods

// First element selected by ID
const firstElement = document.getElementById('firstElement');
firstElement.style.color = 'blue';
firstElement.style.backgroundColor = 'lightgray';
firstElement.style.fontSize = '20px';
firstElement.style.fontStyle = 'italic';
firstElement.textContent = 'First element modified!';

// Second element selected by class
const secondElement = document.querySelector('.secondElement');
secondElement.style.color = 'green';
secondElement.style.backgroundColor = 'yellow';
secondElement.style.fontSize = '18px';
secondElement.style.fontWeight = 'bold';
secondElement.textContent = 'Second element modified!';

// Third element selected using querySelector (default div)
const thirdElement = document.querySelector('div:nth-of-type(3)');
thirdElement.style.color = 'red';
thirdElement.style.backgroundColor = 'pink';
thirdElement.style.fontSize = '16px';
thirdElement.style.textTransform = 'uppercase';
thirdElement.textContent = 'Third element modified!';
