const lista = document.querySelectorAll('[data-lista');

function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        if(listaEscolhida.id == nome) {
            imprimeCotacao(listaEscolhida, nome, valor);
        }
    });
}

function imprimeCotacao(lista, nome, valor) {
    lista.innerHTML = '';
    const plurais = {
        'dolar': 'dolares',
        'iene': 'ienes', 
        'euro': 'euros'
    }
    for(let mutiplicador = 1; mutiplicador <= 1000; mutiplicador *=10 ) {
        const listaItem =document.createElement('li');
        listaItem.innerHTML =
        `
            ${mutiplicador} ${mutiplicador == 1 ? nome : plurais[nome]}: R$${(valor * mutiplicador).toFixed(2)}
        `
        lista.appendChild(listaItem);
    }
}

export default selecionaCotacao;