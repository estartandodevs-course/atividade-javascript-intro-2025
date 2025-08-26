function movimentosPecasXadrez(peca) {
  const nome = peca.toLowerCase();

  switch (nome) {
    case "rei":
      console.log("Rei: move-se uma casa em qualquer direção.");
      break;
    case "rainha":
      console.log("Rainha: move-se em qualquer direção, quantas casas quiser.");
      break;
    case "bispo":
      console.log("Bispo: move-se na diagonal, quantas casas quiser.");
      break;
    case "cavalo":
      console.log(
        "Cavalo: move-se em 'L', duas casas em uma direção e uma em perpendicular."
      );
      break;
    case "torre":
      console.log(
        "Torre: move-se na vertical ou horizontal, quantas casas quiser."
      );
      break;
    case "peão":
      console.log(
        "Peão: move-se uma casa para frente (duas na primeira jogada), captura na diagonal."
      );
      break;
    default:
      console.error("Erro: peça inválida.");
  }
}
