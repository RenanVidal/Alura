import { arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class arqueiroArcano extends Personagem{
    ladoArqueiro;
    ladoMago;
    static tipo = 'Arqueiro-Arcano';
    static descricao =  'Detentor de lancas e flechas mágicas!';

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        this.ladoArqueiro = new arqueiro (nome, destreza);
        this.ladoMago = new Mago (nome, elementoMagico, levelMagico, inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`;
    }

}