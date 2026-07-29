export async function carregarEmpregados(){

    const resposta = await obterEmpregados();

    console.log(
        "RESPOSTA EMPREGADOS:",
        resposta
    );

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    console.log(
        "LISTA EMPREGADOS:",
        lista
    );

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

    console.log(
        "RESPOSTA VEÍCULOS:",
        resposta
    );

    const lista =
        resposta?.data ??
        resposta?.dados ??
        resposta;

    console.log(
        "LISTA VEÍCULOS:",
        lista
    );

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

        console.log(
            "VEÍCULO:",
            item
        );

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
