// Simulação de entrada de dados
const idades = {
  pessoa1: 18,
  pessoa2: 42,
  pessoa3: 25,
  pessoa4: 16
};

function calcularMediaIdade(listaIdades) {
  const somaIdades =
    listaIdades.pessoa1 +
    listaIdades.pessoa2 +
    listaIdades.pessoa3 +
    listaIdades.pessoa4;

  const media = somaIdades / 4;
  return media;
}

function exibirRelatorioIdades(idadesGrupo) {
  const mediaIdade = calcularMediaIdade(idadesGrupo);

  console.log("===== Relatório de Idades =====");
  console.log(`Pessoa 1: ${idadesGrupo.pessoa1} anos`);
  console.log(`Pessoa 2: ${idadesGrupo.pessoa2} anos`);
  console.log(`Pessoa 3: ${idadesGrupo.pessoa3} anos`);
  console.log(`Pessoa 4: ${idadesGrupo.pessoa4} anos`);
  console.log("");
  console.log(`Média das idades: ${mediaIdade.toFixed(1)} anos`);
}

// Executa a função para exibir a média de idade
exibirRelatorioIdades(idades);
