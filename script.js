 var: usada para variáveis globais ou que podem ser redeclaradas
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let: usada para variáveis que mudam de valor, como o estoque
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

 const: usada para constantes, ou seja, valores que não mudam
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

 Atualiza a quantidade de salgados
salgados = salgados - 5;

 Calcula o valor total das vendas
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

if (true) {
  var testeVar = "Sou var";   disponível fora do bloco também
  let testeLet = "Sou let";  só funciona DENTRO do bloco

  console.log(testeVar); funciona
  console.log(testeLet); funciona
}

console.log(testeVar); funciona (porque var tem escopo global ou de função)
console.log(testeLet);ERRO! (porque let tem escopo de bloco)

