console.log("hello world")

/*const h1 = document.querySelector("h1")
console.log(h1)
*/

const html = document.querySelectorAll("p")

const giveMeTheFont = () => {
        const style = getComputedStyle(allElement)
        const font = style.fontFamily
        console.log("html =", html)
    }   

for(const allElement of html) {
    allElement.addEventListener("click", giveMeTheFont)
}
  


// for (let i=0; i<p.length; i++) {
//     p[i].style.color = "green"
// }
