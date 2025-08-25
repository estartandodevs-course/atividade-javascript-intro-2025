let num1 = 78
let num2 = 4
let num3 = 45

if(num1 > num2 && num1 > num3)
{
    console.log(`${num1} é o maior número`);
}
else if(num2 > num1 && num2 > num3){
    console.log(`${num2} é o maior número`)
}
else if(num3 > num1 && num3 > num2)
{
    console.log(`${num3} é o maior número`)
}
else
{
    console.log(`${num1}, ${num2} e ${num3} são iguais`)
}

// Outra maneira

// if(num1 === num2 && num1 === num3)
// {
//     console.log("Os números são iguais")
// }
// else
// {
//     let maior = Math.max(num1, num2, num3)
//     console.log(`${maior} é o maior número`)
// }
