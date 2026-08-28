const entrada = document.getElementById("entrada");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");

botao.addEventListener("click", () => {
    const texto = entrada.value;

    const item = document.createElement("ul");

    item.textContent = texto;

    lista.appendChild(item);

    entrada.value = "";
});