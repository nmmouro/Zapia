export async function carregarEmpregados(){

    const resposta = await obterEmpregados();

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    if (!Array.isArray(lista)) {

        throw new Error(
            "Resposta inválida ao carregar empregados."
        );

    }

    selectEmpregado.innerHTML = `
        <option value="">
            Selecione o empregado
        </option>
    `;

    lista.forEach(item => {

        const empregado =
            item["Empregado"] ?? "";

        const matricula =
            item["Matrícula"] ?? "";

        const valor = [
            empregado,
            matricula
        ]
        .filter(Boolean)
        .join(" / ");

        const option =
            document.createElement("option");

        option.value = valor;

        option.textContent = valor;

        selectEmpregado.appendChild(option);

    });

}

export async function carregarVeiculos(){

    const resposta = await obterVeiculos();
    
    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    if (!Array.isArray(lista)) {

        throw new Error(
            "Resposta inválida ao carregar veículos."
        );

    }

    selectVeiculo.innerHTML = `
        <option value="">
            Selecione o veículo
        </option>
    `;

    lista.forEach(item => {

        const placa =
            item["Placa"] ?? "";

        const modelo =
            item["Modelo"] ?? "";

        const option =
            document.createElement("option");

        option.value = placa;

        option.textContent =
            `${placa} - ${modelo}`;

        selectVeiculo.appendChild(option);

    });

}
