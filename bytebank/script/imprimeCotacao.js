const lista = document.querySelector('[data-lista');

function imprimeCotacao(nome, valor) {
    lista.innerHTML = '';

    for(let mutiplicador = 1; mutiplicador <= 1000; mutiplicador *=10 ) {
        const listaItem =document.createElement('li');
        listaItem.innerHTML =
        `
            ${mutiplicador} ${nome}: R$${(valor * mutiplicador).toFixed(2)}
        `
        lista.appendChild(listaItem);
    }
}

export default imprimeCotacao;