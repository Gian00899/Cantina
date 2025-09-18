// Função para adicionar texto ao "console" na página
function logToConsole(message) {
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.textContent += message + '\n';
    console.log(message); // Mantém o log no console do navegador
}

// =================================================================
// Passo 1: Declarando variáveis
// =================================================================

// 'var' para o nome da cantina (escopo de função)
var nomeCantina = "Cantina da Escola";
logToConsole("Bem-vindo à " + nomeCantina);

// 'let' para a quantidade de salgados (o valor pode mudar)
let salgados = 20;
logToConsole("Temos " + salgados + " salgados disponíveis.");

// 'const' para o preço fixo de cada salgado (o valor não muda)
const precoSalgado = 5;
logToConsole("Cada salgado custa R$" + precoSalgado);

// Atualiza o HTML com os valores iniciais
document.getElementById('nome-cantina').textContent = nomeCantina;
document.getElementById('salgados-disponiveis').textContent = salgados;
document.getElementById('preco-salgado').textContent = "R$" + precoSalgado.toFixed(2);

// =================================================================
// Passo 2: Atualizando valores
// =================================================================

const venderBtn = document.getElementById('vender-btn');
venderBtn.addEventListener('click', () => {
    logToConsole("\n--- Realizando uma venda ---");
    
    // Atualiza o número de salgados (usando 'let')
    const quantidadeVendida = 5;
    if (salgados >= quantidadeVendida) {
        salgados = salgados - quantidadeVendida;
        logToConsole("Foram vendidos " + quantidadeVendida + " salgados.");

        // Calcula quanto a cantina ganhou (usando 'let' para uma nova variável)
        let totalVendido = quantidadeVendida * precoSalgado;
        logToConsole("A cantina vendeu R$" + totalVendido + " nesta transação.");

        // Atualiza o HTML com os novos valores
        document.getElementById('salgados-restantes').textContent = salgados;
        document.getElementById('total-arrecadado').textContent = "R$" + totalVendido.toFixed(2);

        logToConsole("Agora restam " + salgados + " salgados.");
    } else {
        logToConsole("Não há salgados suficientes para a venda!");
        document.getElementById('salgados-restantes').textContent = "Sem estoque";
        document.getElementById('total-arrecadado').textContent = "R$0.00";
    }
});

// =================================================================
// Passo 3: Teste rápido - Demonstração dos escopos
// =================================================================

logToConsole("\n--- Testando 'const' e escopo de blocos ---");

try {
    // Tentar mudar o valor de 'precoSalgado'
    // precoSalgado = 6;
    logToConsole("Tentando mudar o preço do salgado...");
    logToConsole("  -> A linha 'precoSalgado = 6;' geraria um erro de 'Assignment to constant variable'.");
} catch (e) {
    logToConsole("Erro: " + e.message);
}

// Demonstração de escopo de bloco
if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";
    logToConsole("Dentro do bloco:");
    logToConsole("  -> " + testeVar); // Funciona
    logToConsole("  -> " + testeLet); // Funciona
}

logToConsole("Fora do bloco:");
logToConsole("  -> " + testeVar); // Funciona (var tem escopo de função, não de bloco)
try {
    logToConsole("  -> Tentando acessar 'testeLet'...");
    logToConsole(testeLet); // Isso causaria um erro
} catch (e) {
    logToConsole("  -> " + "Erro: " + e.message); // 'testeLet' não é acessível fora do bloco
}