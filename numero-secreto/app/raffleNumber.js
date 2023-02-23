const lowerValue = 1;
const highestValue = 1000;
const elementLowerValue = document.getElementById('lower-value');
const elementHighestValue = document.getElementById('highest-value');
const secretNumber = generateRandomNumber();

elementLowerValue.innerHTML = lowerValue;
elementHighestValue.innerHTML = highestValue;

function generateRandomNumber () {
    return parseInt(Math.random() * highestValue + 1);
};

console.log('Número Secreto: ', secretNumber);
