// Bloco if para testar escopo de var e let
if (true) {
  var testeVar = "Sou var";   // var tem escopo global ou de função
  let testeLet = "Sou let";   // let tem escopo de bloco

  console.log("Dentro do bloco:");
  console.log(testeVar); // funciona dentro do bloco
  console.log(testeLet); // funciona dentro do bloco
}

console.log("Fora do bloco:");
console.log(testeVar); // funciona fora do bloco (exibe "Sou var")

// Teste para acessar let fora do bloco - isso gera erro
try {
  console.log(testeLet);
} catch (error) {
  console.error("Erro ao acessar testeLet fora do bloco:", error.message);
}
