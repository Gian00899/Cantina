if (true)
  var testeVar = "Sou var";   var tem escopo global ou de função
  let testeLet = "Sou let";    let tem escopo de bloco
  console.log(testeVar);  funciona dentro do bloco
  console.log(testeLet);  funciona dentro do bloco}
console.log(testeVar);  funciona fora do bloco
console.log(testeLet);  ERRO fora do bloco — testeLet não está definida aqui

