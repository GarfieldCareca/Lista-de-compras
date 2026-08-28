const entrada = document.getElementById("entrada");
const botao = document.getElementById("adicionar");
const lista = document.getElementById("lista");
const conteiner = document.getElementById("conteiner")
const remover = document.getElementById("remover")
const rm = document.getElementById("rm")



botao.addEventListener("click", () => {
    const texto = entrada.value;

    const item = document.createElement("li");

    item.textContent = texto;

    lista.appendChild(item);

    conteiner.appendChild(lista);

    entrada.value = "";
});

remover.addEventListener("click", () =>{
    const removerProd = rm.value;

    const itens = lista.querySelectorAll("li");

    for (let li of itens){
        if (li.textContent === removerProd){
            li.remove();
            
            break
        }
    }

    rm.value = ""
})