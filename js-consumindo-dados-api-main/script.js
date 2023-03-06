async function buscaEndereco (cep) {
    try {
        const consultaCep = await fetch (`https://viacep.com.br/ws/${cep}/json/`);
        const consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error ('Cep não existente!');
        };
        const cidade = document.getElementById('cidade');
        const logadouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (erro) {
        console.log(erro);
    };
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
