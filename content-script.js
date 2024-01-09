console.log("hello world")

const p = document.querySelector("h1")
console.log("p = ", p)

const style = getComputedStyle(p)
console.log("getComputedStyle = ", style)

const color = style.color
console.log("color = ", color)

const font = style.fontFamily
console.log(font)


// for (let i=0; i<p.length; i++) {
//     p[i].style.color = "green"
// }
