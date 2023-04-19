let listaDeItens = [];

const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    salvarItem();
})

function salvarItem() {
    const comprasItem = itensInput.ariaValueMax;

    listaDeItens