// Função para adicionar texto ao "console" na página
function logToConsole(message) {
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.textContent += message + '\n';
    console.log(message); // Mantém o log no console do navegador
}

// =================================================================
// Passo 1: Declarando variáveis
// =================================================================

// Variáveis para salgados
let salgados = 20;
const precoSalgado = 8;

// Variáveis para bebidas
let bebidas = 15;
const precoBebida = 7;

logToConsole("Bem-vindo à Cantina da Escola!");
logToConsole(`Temos ${salgados} salgados (Risole, Kibe) e ${bebidas} bebidas (Água, Coca-cola).`);
logToConsole(`Cada salgado custa R$${precoSalgado}. Cada bebida custa R$${precoBebida}.`);

// Atualiza o HTML com os valores iniciais
document.getElementById('salgados-disponiveis').textContent = salgados;
document.getElementById('preco-salgado').textContent = "R$" + precoSalgado.toFixed(2);
document.getElementById('bebidas-disponiveis').textContent = bebidas;
document.getElementById('preco-bebida').textContent = "R$" + precoBebida.toFixed(2);
document.getElementById('salgados-restantes').textContent = salgados;
document.getElementById('bebidas-restantes').textContent = bebidas;
document.getElementById('total-arrecadado').textContent = "R$0.00";

// =================================================================
// Passo 2: Atualizando valores com botões de venda
// =================================================================

// Botão para vender salgados
const venderSalgadoBtn = document.getElementById('vender-salgado-btn');
venderSalgadoBtn.addEventListener('click', () => {
    logToConsole("\n--- Realizando uma venda de salgados ---");

    const quantidadeVendida = 5;
    if (salgados >= quantidadeVendida) {
        salgados = salgados - quantidadeVendida;
        let totalVendido = quantidadeVendida * precoSalgado;
        logToConsole(`Foram vendidos ${quantidadeVendida} salgados. Total: R$${totalVendido}.`);

        // Atualiza o HTML
        document.getElementById('salgados-restantes').textContent = salgados;
        document.getElementById('total-arrecadado').textContent = "R$" + totalVendido.toFixed(2);
    } else {
        logToConsole("Não há salgados suficientes para a venda!");
        document.getElementById('salgados-restantes').textContent = "Sem estoque";
        document.getElementById('total-arrecadado').textContent = "R$0.00";
    }
});

// Botão para vender bebidas
const venderBebidaBtn = document.getElementById('vender-bebida-btn');
venderBebidaBtn.addEventListener('click', () => {
    logToConsole("\n--- Realizando uma venda de bebidas ---");

    const quantidadeVendida = 3;
    if (bebidas >= quantidadeVendida) {
        bebidas = bebidas - quantidadeVendida;
        let totalVendido = quantidadeVendida * precoBebida;
        logToConsole(`Foram vendidas ${quantidadeVendida} bebidas. Total: R$${totalVendido}.`);

        // Atualiza o HTML
        document.getElementById('bebidas-restantes').textContent = bebidas;
        document.getElementById('total-arrecadado').textContent = "R$" + totalVendido.toFixed(2);
    } else {
        logToConsole("Não há bebidas suficientes para a venda!");
        document.getElementById('bebidas-restantes').textContent = "Sem estoque";
        document.getElementById('total-arrecadado').textContent = "R$0.00";
    }
});

// =================================================================
// Passo 3: Demonstração dos escopos (sem mudanças, apenas para referência)
// =================================================================

logToConsole("\n--- Teste de 'const' e escopo de blocos (referência) ---");

try {
    // Tentar mudar o valor de 'precoSalgado'
    // precoSalgado = 10;
    logToConsole("Tentando mudar o preço do salgado...");
    logToConsole("  -> A linha 'precoSalgado = 10;' geraria um erro de 'Assignment to constant variable'.");
} catch (e) {
    logToConsole("Erro: " + e.message);
}