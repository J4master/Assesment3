// document.getElementById(color)

// button.addEventListener("click", function(evt) {
//     button.style.backgroundColor = 'purple'
// })
const colorBtn = document.querySelector('#color')
// console.log(colorBtn)

const changeColor = (evt) => {
    colorBtn.style.backgroundColor = 'purple'
    colorBtn.style.color = 'White'
    alert("what if it was purpPlllllllllle")
}
colorBtn.addEventListener('click', changeColor)



const placeBtn = document.querySelector('#place')
// console.log(placeBtn)

// const favPlace = (evt) => {
//     placeBtn.textContent.textContent = 'my girlfriends arms'
// }
// placeBtn.addEventListener('click', favPlace)
placeBtn.addEventListener("click", function(evt){
    alert("my bed")
})




const ritualBtn = document.querySelector('#ritual')

ritualBtn.addEventListener("click", function(evt){
    alert("sleeping")
})