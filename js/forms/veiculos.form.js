export function limparFormulario(formulario) {

    registroEditando = null;

    formulario.reset();

    preencherDataAtual(formulario.elements["data"]);

    document.body.classList.remove("modo-edicao");

}


export function novoFormulario(formulario) {

    limparFormulario(formulario);

}
