function checkIfTheGuessIsValid (guess) {
    const number = +guess;

    if (invalidGuess(number)) {
        elementGuess.innerHTML += '<div>Valor inválido!</div>';
        return
    };

    if (validNumber(number)) {
        elementGuess.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${lowerValue} e ${highestValue}!</div>`;
        return
    };   

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${secretNumber}</h3>
            <button id="play-again" class="btn-play">Jogar Novamente</button>
        `
    } else if (number > secretNumber) {
        elementGuess.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-down-long"></i></div>';
    } else {
        elementGuess.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    };
};

function invalidGuess(number) {
    return Number.isNaN(number);
}

function validNumber (number) {
    return number > highestValue || number < lowerValue;
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload();
    };
});