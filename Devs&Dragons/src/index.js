import { Personagem } from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { arqueiro } from "./modules/arqueiro.js";
import { arqueiroArcano } from "./modules/arqueiro-arcano.js";


const magoAntonio = new Mago ('Antonio', 4, 'fogo', 4, 3);
const magaJulia = new Mago ('Julia', 8, 'gelo', 7, 10);
const arqueiroCaio = new arqueiro('Bruno', 9, 10);
const arqueiroArcanoLucio = new arqueiroArcano ('Lucio', 9, 10, 'fogo', 5, 7);

const personagens = [magoAntonio, magaJulia, arqueiroCaio, arqueiroArcanoLucio];

new personagemView(personagens).render();

console.log (Personagem.verificarVencedor(magoAntonio, arqueiroArcanoLucio));