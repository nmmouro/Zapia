// ============================================================================
// FORMULÁRIOS UTILS
// Painel Frota
// Arquivo: js/utils/formulario.js
//
// Funções auxiliares para manipulação de formulários
// ============================================================================



// ============================================================================
// PREENCHER SELECT
// ============================================================================


export function preencherSelect(

    select,

    dados = [],

    valueField,

    textField,

    textoInicial = "Selecione"

){


    if(!select) return;



    select.innerHTML = "";



    const opcaoInicial =

        document.createElement("option");



    opcaoInicial.value = "";

    opcaoInicial.textContent = textoInicial;



    select.appendChild(

        opcaoInicial

    );




    dados.forEach(item => {



        const option =

            document.createElement("option");



        option.value =

            item[valueField] ?? "";



        option.textContent =

            item[textField] ?? "";



        select.appendChild(

            option

        );



    });


}




// ============================================================================
// OBTER DADOS DO FORMULÁRIO
// ============================================================================


export function obterDadosFormulario(

    formulario,

    mapa = {}

){


    if(!formulario)

        return {};



    const dados = {};



    Object.entries(mapa)

        .forEach(

            ([campoFormulario, campoApi]) => {



                const elemento =

                    formulario.elements[campoFormulario];



                if(!elemento)

                    return;



                dados[campoApi] =

                    elemento.value

                        .trim();



            }

        );



    return dados;


}




// ============================================================================
// PREENCHER FORMULÁRIO
// ============================================================================


export function preencherFormulario(

    formulario,

    dados = {},

    mapa = {}

){


    if(!formulario)

        return;



    Object.entries(mapa)

        .forEach(

            ([campoFormulario, campoApi]) => {



                const elemento =

                    formulario.elements[campoFormulario];



                if(!elemento)

                    return;



                elemento.value =

                    dados[campoApi] ?? "";



            }

        );


}




// ============================================================================
// LIMPAR FORMULÁRIO
// ============================================================================


export function limparFormulario(

    formulario

){


    if(!formulario)

        return;



    formulario.reset();


}




// ============================================================================
// ATIVAR / DESATIVAR FORMULÁRIO
// ============================================================================


export function habilitarFormulario(

    formulario,

    habilitado = true

){


    if(!formulario)

        return;



    formulario

        .querySelectorAll(

            "input, select, textarea, button"

        )

        .forEach(

            campo => {


                campo.disabled =

                    !habilitado;


            }

        );


}




// ============================================================================
// BLOQUEAR FORMULÁRIO
// ============================================================================


export function bloquearFormulario(

    formulario

){


    habilitarFormulario(

        formulario,

        false

    );


}




// ============================================================================
// FOCAR PRIMEIRO CAMPO
// ============================================================================


export function focarPrimeiroCampo(

    formulario

){


    if(!formulario)

        return;



    const campo =

        formulario.querySelector(

            "input:not([type=hidden]), select, textarea"

        );



    campo?.focus();


}
