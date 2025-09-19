document.addEventListener("DOMContentLoaded", () => {
  // Objeto com os dados para o orçamento.
  // Corrigido: 'aplle' para 'apple', 'xiomi' para 'xiaomi' e chaves com espaços (" bateria").
  const dadosOrcamento = {
    apple: {
      "iPhone-XR": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "iPhone-13": {
        "tela-quebrada": 600.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "iPhone-14": {
        "tela-quebrada": 600.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "iPhone-15": {
        "tela-quebrada": 600.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
    },
    samsung: {
      S23: {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      S24: {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      S25: {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
    },
    xiaomi: {
      "xiaomi-14": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      Redmi: {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "Poco-X6": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "Redmi-A3": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
    },
    motorola: {
      "motorola-edge": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "moto-G84": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "moto-E22": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
      "motorola-razr": {
        "tela-quebrada": 500.0,
        "tampa-trincada": 400.0,
        bateria: 300.0,
        "conector-ruim": 350.0,
      },
    },
  };

  // Seletores dos elementos do formulário
  const fabricanteSelect = document.getElementById("fabricante-select");
  const modeloSelect = document.getElementById("modelo-select");
  const problemaSelect = document.getElementById("problema-select");
  const resultadoDiv = document.getElementById("resultado-orcamento");

  // Função para formatar os nomes para exibição (ex: 'tela-quebrada' -> 'Tela Quebrada')
  const formatarNome = (nome) => {
    return nome.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  // --- Lógica Principal ---

  // Define o estado inicial dos selects
  modeloSelect.disabled = true;
  problemaSelect.disabled = true;

  // 1. Preencher o select de fabricantes ao carregar a página
  const fabricantes = Object.keys(dadosOrcamento);
  fabricantes.forEach((fabricante) => {
    const option = document.createElement("option");
    option.value = fabricante;
    option.textContent = fabricante.charAt(0).toUpperCase() + fabricante.slice(1);
    fabricanteSelect.appendChild(option);
  });

  // 2. Adicionar ouvinte de evento para o select de fabricantes
  fabricanteSelect.addEventListener("change", () => {
    // Limpa e reseta os selects seguintes e o resultado
    modeloSelect.innerHTML = '<option value="">Selecione o modelo</option>';
    problemaSelect.innerHTML = '<option value="">Selecione o problema</option>';
    resultadoDiv.innerHTML = "";

    const fabricanteSelecionado = fabricanteSelect.value;

    if (fabricanteSelecionado) {
      // Preenche o select de modelos
      const modelos = dadosOrcamento[fabricanteSelecionado];
      for (const modelo in modelos) {
        const option = document.createElement("option");
        option.value = modelo;
        option.textContent = formatarNome(modelo);
        modeloSelect.appendChild(option);
      }
      // Habilita o select de modelos
      modeloSelect.disabled = false;
      problemaSelect.disabled = true;
    } else {
      // Desabilita se nenhum fabricante for selecionado
      modeloSelect.disabled = true;
      problemaSelect.disabled = true;
    }
  });

  // 3. Adicionar ouvinte de evento para o select de modelos
  modeloSelect.addEventListener("change", () => {
    // Limpa e reseta o select de problema e o resultado
    problemaSelect.innerHTML = '<option value="">Selecione o problema</option>';
    resultadoDiv.innerHTML = "";

    const fabricanteSelecionado = fabricanteSelect.value;
    const modeloSelecionado = modeloSelect.value;

    if (modeloSelecionado) {
      // Preenche o select de problemas
      const problemas = dadosOrcamento[fabricanteSelecionado][modeloSelecionado];
      for (const problema in problemas) {
        const option = document.createElement("option");
        option.value = problema;
        option.textContent = formatarNome(problema);
        problemaSelect.appendChild(option);
      }
      // Habilita o select de problemas
      problemaSelect.disabled = false;
    } else {
      // Desabilita se nenhum modelo for selecionado
      problemaSelect.disabled = true;
    }
  });

  // 4. Adicionar ouvinte de evento para o select de problemas
  problemaSelect.addEventListener("change", () => {
    const fabricanteSelecionado = fabricanteSelect.value;
    const modeloSelecionado = modeloSelect.value;
    const problemaSelecionado = problemaSelect.value;

    if (problemaSelecionado) {
      // Calcula e exibe o orçamento
      const preco =
        dadosOrcamento[fabricanteSelecionado][modeloSelecionado][
          problemaSelecionado
        ];
      resultadoDiv.innerHTML = `<p>O pré-orçamento é de: <strong>R$ ${preco
        .toFixed(2)
        .replace(".", ",")}</strong></p>`;
    } else {
      // Limpa o resultado se nenhum problema for selecionado
      resultadoDiv.innerHTML = "";
    }
  });
});