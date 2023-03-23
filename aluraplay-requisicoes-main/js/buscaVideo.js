import { conectaApi } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault();
    const dadosDepesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDepesquisa);
    const lista = document.querySelector("[data-lista]");
    while (lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    busca.forEach (elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ));
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esses termos!</h2>`
    }
}

const botaoDepesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDepesquisa.addEventListener('click', evento => buscaVideo(evento));