function pecaDeXadrez(peca) {
  switch (peca.toLowerCase()) {
    case "rei":
      return "Rei → Move-se uma casa em qualquer direção.";
    case "rainha":
      return "Rainha → Move-se nas diagonais e linha reta quantas casas quiser.";
    case "bispo":
      return "Bispo → Move-se em diagonal quantas casas quiser.";
    case "torre":
      return "Torre → Move-se em linha reta quantas casas quiser.";
    case "cavalo":
      return "Cavalo → Move-se em forma de L, avança duas casas em uma direção e uma em perpendicular.";
    case "peão":
    case "peao":
      return "Peão → Move-se uma casa para frente (ou duas no movimento inicial) e captura uma casa em cada diagonal frontal dele.";
    default:
      return "Erro, Peça inválida!";
  }
}

console.log(pecaDeXadrez("Rei"));
console.log(pecaDeXadrez("rainha"));
console.log(pecaDeXadrez("BISPO"));
console.log(pecaDeXadrez("cavalo"));
console.log(pecaDeXadrez("torre"));
console.log(pecaDeXadrez("peão"));
console.log(pecaDeXadrez("Peao"));
console.log(pecaDeXadrez("cachorro"));
