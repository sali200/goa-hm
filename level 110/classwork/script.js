const firstElement = document.getElementById('first');
const secondElement = document.getElementsByClassName('second')[0];
const thirdElement = document.getElementsByTagName('div')[2];

firstElement.style.color = 'purple';
firstElement.style.backgroundColor = 'black';
firstElement.style.fontSize = '40px';
firstElement.style.fontStyle = 'cursivee';

secondElement.style.color = 'blue';
secondElement.style.backgroundColor = 'pink';
secondElement.style.fontSize = '40px';
secondElement.style.fontStyle = 'cursive';

thirdElement.style.color = 'yellow';
thirdElement.style.backgroundColor = 'lightblue';
thirdElement.style.fontSize = '40px';
thirdElement.style.fontStyle = 'underline';

firstElement.textContent = 'Updated First Element';
secondElement.textContent = 'Updated Second Element';
thirdElement.textContent = 'Updated Third Element';
