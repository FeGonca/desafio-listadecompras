// Capturando elementos
const input = document.getElementById('input-item')
const btn = document.getElementById('btn')
const form = document.querySelector('form')
const ul = document.querySelector('ul')

const newItem = document.createElement('li')
newItem.className = 'item'



const descriptionItem = document.createElement('label')
descriptionItem.textContent = 'Teste'
console.log(descriptionItem.textContent);

newItem.append(descriptionItem)
console.log(newItem);


input.addEventListener('input', () => {
    console.log(input.value)
})

form.onsubmit = (event) => {
    event.preventDefault()


}