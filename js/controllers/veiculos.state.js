export let registros = [];

export let registroEditando = null;

export const tabela = document.querySelector("#tabelaveiculos");

export function setRegistros(lista) {
    registros = lista;
}

export function setRegistroEditando(id) {
    registroEditando = id;
}
