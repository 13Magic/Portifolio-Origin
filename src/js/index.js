/*
Objetivo 1 - Quando o usuário clicar no botão de mostrar mais deve abrir os projetos escondidos no html

Passo 1 - pegar o botão mostrar mias no JS pra poder verificar quando o usuário clicar encima dele

Passo 2 - Identificar o click no botão

Passo 3 - Adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - Esconder o botão de mostrar mais

Passo 1 - Pegar o botão e esconder ele
*/

    const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo');

 
    botaoMostrarProjetos.addEventListener("click", () => {
    mostrarMaisProjetos();
    EsconderBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');

    });
}

function EsconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
