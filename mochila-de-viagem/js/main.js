const form = document.getElementById("novoItem");

form.addEventlistener("submit", (evento) => {
    evento.preventDefault();
    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
});

function criaElemento (nome, quantidade) {

};