const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
const list = document.querySelector("ul")
let listArray = []

const populate = (item) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = 
    `<span class="task-text">${item}</span>
         <img class="trash-icon" src="svg/garbage.svg" alt="trash">
    `

    list.append(newLi)
 
    const img = newLi.querySelector("img")
    img.addEventListener("click", () => {
        const parentNode = img.parentNode
        const index = listArray.indexOf(parentNode.innerText)
        parentNode.remove()
        listArray.splice(index, 1)
        localStorage.setItem("listArray", listArray)
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    populate(input.value)
    listArray.push(input.value)
    localStorage.setItem("listArray", listArray)
      input.value = ""
})

let getItem = localStorage.getItem("listArray")
if(getItem){
listArray = getItem.split(",")
    listArray.forEach(item => {
        populate(item)
    })
}


