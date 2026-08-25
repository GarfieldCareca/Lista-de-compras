const title = document.querySelector(#h1)

const input = document.getElementById('busca')
const lista = document.getElementById('resultados')

input.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase()
}
);

let produtos = []

produtos.forEach(nome => {
    const itens = document.createElement('ul');
    itens.textContent = nome;
});



document.body.appendChild(produtos)

