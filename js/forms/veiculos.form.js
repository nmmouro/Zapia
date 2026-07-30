export function limparFormulario(formulario) {

    registroEditando = null;

    formulario.reset();

    preencherDataAtual();

    document.body.classList.remove("modo-edicao");

}


export function novoFormulario(formulario) {

    limparFormulario(formulario);

}
