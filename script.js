const entrada = document.getElementById("entrada");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const conteiner = document.getElementById("conteiner")

botao.addEventListener("click", () => {
    const texto = entrada.value;

    const item = document.createElement("li");

    item.textContent = texto;

    lista.appendChild(item);

    conteiner.appendChild(lista)

    entrada.value = "";
});