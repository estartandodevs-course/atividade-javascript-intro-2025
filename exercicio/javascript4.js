let num1 = 100
let num2 = 30
let num3 = 50

if(num1 <= 0 || num2 <= 0 || num3 <= 0)
{
    console.log("Erro: ângulo inválido")
}
else
{
    let soma = num1 + num2 + num3
    if(soma === 180)
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }
}
