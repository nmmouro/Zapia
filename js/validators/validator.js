const Validator = (() => {

    // ========================================================================
    // VALIDAR INCLUSÃO
    // ========================================================================

    function validarInclusao(schema, dados) {

        if (!schema) {

            throw new Error(
                "Schema não informado."
            );

        }

        if (!dados) {

            throw new Error(
                "Dados não informados."
            );

        }

        if (!Array.isArray(schema.campos)) {

            throw new Error(
                "Schema inválido: 'campos' não encontrado."
            );

        }

        const erros = [];


        // ====================================================================
        // PERCORRER CAMPOS DO SCHEMA
        // ====================================================================

        schema.campos.forEach(campo => {

            const nome = campo.campo;

            const valor = dados[nome];

            Logger.log(
                `VALIDANDO INCLUSÃO: ${nome} = ${valor}`
            );


            // ================================================================
            // OBRIGATÓRIO
            // ================================================================

            if (
                campo.obrigatorio === true &&
                (
                    valor === undefined ||
                    valor === null ||
                    String(valor).trim() === ""
                )
            ) {

                erros.push(
                    `${nome} é obrigatório.`
                );

            }

        });


        // ====================================================================
        // RETORNAR ERROS
        // ====================================================================

        if (erros.length > 0) {

            throw new Error(
                erros.join(" | ")
            );

        }


        return true;

    }


    // ========================================================================
    // VALIDAR EDIÇÃO
    // ========================================================================

    function validarEdicao(schema, id, dados) {

        if (!schema) {

            throw new Error(
                "Schema não informado."
            );

        }

        if (!id) {

            throw new Error(
                "ID não informado para edição."
            );

        }

        if (!dados) {

            throw new Error(
                "Dados não informados para edição."
            );

        }

        if (!Array.isArray(schema.campos)) {

            throw new Error(
                "Schema inválido: 'campos' não encontrado."
            );

        }

        const erros = [];


        // ====================================================================
        // PERCORRER CAMPOS DO SCHEMA
        // ====================================================================

        schema.campos.forEach(campo => {

            const nome = campo.campo;

            const valor = dados[nome];

            Logger.log(
                `VALIDANDO EDIÇÃO: ${nome} = ${valor}`
            );


            // ================================================================
            // OBRIGATÓRIO
            // ================================================================

            if (
                campo.obrigatorio === true &&
                (
                    valor === undefined ||
                    valor === null ||
                    String(valor).trim() === ""
                )
            ) {

                erros.push(
                    `${nome} é obrigatório.`
                );

            }

        });


        // ====================================================================
        // RETORNAR ERROS
        // ====================================================================

        if (erros.length > 0) {

            throw new Error(
                erros.join(" | ")
            );

        }


        return true;

    }


    // ========================================================================
    // VALIDAR EXCLUSÃO
    // ========================================================================

    function validarExclusao(schema, id) {

        if (!schema) {

            throw new Error(
                "Schema não informado."
            );

        }

        if (!id) {

            throw new Error(
                "ID não informado para exclusão."
            );

        }

        return true;

    }


    // ========================================================================
    // API PÚBLICA
    // ========================================================================

    return {

        validarInclusao,

        validarEdicao,

        validarExclusao

    };

})();

export default Validator;
