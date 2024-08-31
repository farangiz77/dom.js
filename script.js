// const h1 = prompt("text plz")
// const p =prompt("text toje")
// const qu3 = prompt('price')

// const title = document.querySelector('h1')
// const text = document.querySelector('p')
// const box = document.querySelector('.box')

// title.innerText = h1
// text.innerText = p



// const price = document.createElement('h3')
// price.innerText = qu3
// box.append(price)



// const btn1 = document.querySelector('#btn1')
// const btn2 = document.querySelector('#btn2')

// btn1.onclick = () => {
//   alert ("tovar kuplen")
//   box.classList.add("none")


// }


// btn2.onclick = () => {
//   alert ("povtorit popitku")
// }




const list = document.querySelector(".list")
const f1 = prompt('fruit 1')
const f2 = prompt('fruit 2')
const f3 = prompt('fruit 3')

const fruits= []

fruits.push(f1)
fruits.push(f2)
fruits.push(f3)

fruits.forEach(fruit =>{
const p = document.createElement('p')
p.innerText = fruit
list.append(p)

p.onclick = () =>{
  p.remove()
}
})

