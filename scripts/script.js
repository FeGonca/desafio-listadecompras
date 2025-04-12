// Seleciona os elementos do formulário
const form = document.querySelector("form")
const inputText = document.getElementById("input-item")

// Selecionar os elementos da lista
const itemList = document.querySelector("ul")

// 
form.onsubmit = (event) => {
    event.preventDefault()

    // Cria um objeto com os detalhes do novo item.
    const newItem = {
        name_item: inputText.value
    }
    itemAdd(newItem)    
}

// Função para crir um item na lista
function itemAdd(newItem) {
    try {
        // Cria o elemento de li para adicionar o item (li) na lista (ul)
        const item = document.createElement("li")
        item.classList.add("item")

        // Cria div
        const div = document.createElement("div")

        //  Cria checkbox
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("name", "item")
        checkbox.setAttribute("id", "item")
        checkbox.classList.add("check")

        // Cria imagem
        const trashImage = document.createElement("img")
        trashImage.setAttribute("src", "../assets/icons/Frame-3.svg")
        trashImage.classList.add("trash")

        // Cria label
        const label = document.createElement("label")
        label.setAttribute("for", "item")
        label.textContent = `${newItem.name_item}`

        // Add checkbox e label ao div
        div.append(checkbox, label)

        // Adiciona os elementos criados ao li
        item.append(div, trashImage)

        // Adiciona o li ao ul
        itemList.append(item)

        // Limpar o input
        formClear()

    } catch (error) {
        console.log(error);
        
    }
}

// Evento para capturar o clique nos itens da lista.
itemList.addEventListener("click", function(event) {
    console.log(event);
    if(event.target.classList.contains("trash")) {
        console.log(event);
        const dell = event.target.closest(".item")
        dell.remove()
    }
})

// Função para limpar o input
function formClear() {
    inputText.value = ""
}