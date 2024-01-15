const giveMeTheFont = (event) => {
    const elementClicked = event.target
    const styleofElementCLicked = getComputedStyle(elementClicked)
    const font = styleofElementCLicked.fontFamily
    elementClicked.datatoggle = "tooltip"
    elementClicked.title = font
}

document.addEventListener("mouseover", giveMeTheFont)


