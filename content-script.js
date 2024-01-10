console.log("hello world")

const giveMeTheFont = (event) => {
    const elementClicked = event.target
    const styleofElementCLicked = getComputedStyle(elementClicked)
    const font = styleofElementCLicked.fontFamily
    console.log(font)
}

document.addEventListener("mouseover", giveMeTheFont)
