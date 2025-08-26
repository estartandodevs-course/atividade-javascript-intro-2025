
let peca = "Cavalo";
peca = peca.toLowerCase();
let movimento;

switch (peca) {
    case "peão":
        movimento = "Movimenta-se uma casa para frente.";
        break;       
    case "torre":
        movimento = "Movimenta-se em linha reta, tanto na vertical quanto na horizontal.";
        break;
    case "cavalo":
        movimento = "Movimenta-se em 'L', duas casas em uma direção e depois uma casa perpendicular.";
        break;
    case "bispo":
        movimento = "Movimenta-se na diagonal, quantas casas quiser.";
        break;
    case "rainha":
        movimento = "Combina os movimentos da torre e do bispo.";
        break;
    case "rei":
        movimento = "Movimenta-se uma casa em qualquer direção.";
        break;
    default:
        movimento = "Erro: Peça inválida.";
        break;
}   