
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', clicarNoBotao);

function clicarNoBotao() {
    mostrarMaisProjetos();
    esconderBotao();
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(function(projetoInativo) {
        projetoInativo.classList.add('ativo');
    });
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
