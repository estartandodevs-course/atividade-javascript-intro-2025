let peca = "Bispo";
peca = peca.toLowerCase();
switch (peca) {
    case "peão":
        console.log("Movimenta-se uma casa para frente, no primeiro movimento pode mover-se duas casas.");
        break;
    case "torre":
        console.log("Movimenta-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;
    case "cavalo":
        console.log("Movimenta-se em 'L', ou seja, duas casas em uma direção (horizontal ou vertical) e depois uma casa perpendicular.");
        break;
    case "bispo":
        console.log("Movimenta-se na diagonal, quantas casas quiser.");
        break;
    case "rainha":
        console.log("Combina os movimentos da torre e do bispo, movendo-se em linha reta ou na diagonal, quantas casas quiser.");
        break;
    case "rei":
        console.log("Movimenta-se uma casa em qualquer direção (horizontal, vertical ou diagonal).");
        break;
    default:
        console.log("Peça inválida");
        break;
}