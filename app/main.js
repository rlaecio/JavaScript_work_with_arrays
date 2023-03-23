let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosApi();

async function getBuscarLivrosApi() {
    const res = await fetch(endPointApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOslivrosNaTela(livrosComDesconto);
}

