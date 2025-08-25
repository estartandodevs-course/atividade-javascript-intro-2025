
let peca = "BISPO              ".toLowerCase().trim();


switch (peca)
{
    case "peao":
        console.log("move-se apenas para frente, uma casa por vez");
        break;
    case "torre":
        console.log("move-se em linha reta, quantas casas quiser");
        break;
    case "cavalo":
        console.log("move-se em L, duas casas em uma direção e uma casa em outra");
        break;
    case "bispo":
        console.log("move-se na diagonal, quantas casas quiser");
        break;
    case "rainha":
        console.log("move-se em linha reta ou na diagonal, quantas casas quiser");
        break;
    case "rei":
        console.log("move-se uma casa em qualquer direção");
        break;
    default:
        console.log("Peça inválida");
}