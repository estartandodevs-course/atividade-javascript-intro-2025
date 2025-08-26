const peca = 'Bispo';
const pecaNormalizada = peca.toLowerCase();

switch (pecaNormalizada) {
  case 'rei':
    console.log('Rei: move uma casa em qualquer direção.');
    break;
  case 'rainha':
    console.log('Rainha: move em qualquer direção, quantas casas quiser.');
    break;
  case 'bispo':
    console.log('Bispo: move na diagonal, quantas casas quiser.');
    break;
  case 'cavalo':
    console.log('Cavalo: move em "L", duas casas em uma direção e uma em perpendicular.');
    break;
  case 'torre':
    console.log('Torre: move na vertical ou horizontal, quantas casas quiser.');
    break;
  case 'peão':
    console.log('Peão: move uma casa para frente (duas no seu primeiro movimento), captura na diagonal.');
    break;
  default:
    console.log('Erro: peça inválida!');
}