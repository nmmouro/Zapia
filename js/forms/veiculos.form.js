export function limparFormulario(formulario) {

    console.log("limparFormulario executou");

    registroEditando = null;

    formulario.reset();

    console.log(formulario.elements["data"]);

    preencherDataAtual(formulario.elements["data"]);

    document.body.classList.remove("modo-edicao");
}


export function novoFormulario(formulario) {

    limparFormulario(formulario);

}
