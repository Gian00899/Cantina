// Criando o estilo via JS
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff9e6;
    color: #444;
    margin: 20px;
    padding: 0;
  }
  h1 {
    color: #b85400;
  }
  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #b85400;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  #messages {
    margin-top: 20px;
    font-size: 1.2rem;
    min-height: 40px;
  }
`;
document.head.appendChild(style);

// Declarações iniciais com var, let, const
var nomeCantina = "Cantina do Antonio";
let salgados = 30;
const precoSalgado = 6;

// Criando elementos dinamicamente

const titulo = document.createElement('h1');
titulo.textContent = nomeCantina;
document.body.appendChild(titulo);

const estoqueP = document.createElement('p');
estoqueP.textContent = `Temos ${salgados} salgados disponíveis.`;
document.body.appendChild(estoqueP);

const precoP = document.createElement('p');
precoP.textContent = `Cada salgado custa R$${precoSalgado.toFixed(2)}.`;
document.body.appendChild(precoP);

const btnVender = document.createElement('button');
btnVender.textContent = 'Vender 1 salgado';
document.body.appendChild(btnVender);

const messagesDiv = document.createElement('div');
messagesDiv.id = 'messages';
document.body.appendChild(messagesDiv);

let totalVendido = 0;

function atualizarEstoque() {
  estoqueP.textContent = `Temos ${salgados} salgados disponíveis.`;
  if (salgados <= 0) {
    btnVender.disabled = true;
    messagesDiv.textContent = 'Estoque esgotado! Não é possível vender mais salgados.';
  } else {
    messagesDiv.textContent = '';
    btnVender.disabled = false;
  }
}

btnVender.addEventListener('click', () => {
  if (salgados > 0) {
    salgados--;
    totalVendido += precoSalgado;
    atualizarEstoque();
    messagesDiv.textContent = `Vendido 1 salgado! Total vendido: R$${totalVendido.toFixed(2)}.`;
  }
});

atualizarEstoque();
