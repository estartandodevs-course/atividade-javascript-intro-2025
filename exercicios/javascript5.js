let peca = "peao";
switch (peca.toLowerCase()) {
  case "peao":
    console.log(
      "Movimento: 1 casa para frente, ou 2 casas se for o primeiro movimento. Captura na diagonal."
    );
    break;
  case "torre":
    console.log(
      "Movimento: qualquer número de casas em linha reta, tanto na horizontal quanto na vertical."
    );
    break;
  case "cavalo":
    console.log(
      "Movimento: em 'L', ou seja, duas casas em uma direção e depois uma casa perpendicular. Pode pular sobre outras peças."
    );
    break;
  case "bispo":
    console.log("Movimento: qualquer número de casas na diagonal.");
    break;
  case "rainha":
    console.log(
      "Movimento: qualquer número de casas em linha reta, tanto na horizontal, vertical quanto na diagonal."
    );
    break;
  case "rei":
    console.log("Movimento: uma casa em qualquer direção.");
    break;
}
