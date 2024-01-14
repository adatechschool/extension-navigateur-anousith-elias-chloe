const giveMeTheFont = (event) => {
    const elementOver = event.target
    const styleofElementOver = getComputedStyle(elementOver)
    const font = styleofElementOver.fontFamily
    
    const body = document.querySelector("body")
    const tooltip = document.createElement('div') // ont créer un élément enfant qui est la div avec laquelle otn manipulera le CSS
    tooltip.className = "tooltip" 
    tooltip.textContent = font // ici, ont appel la variable font qui contient toute les polices
    body.appendChild(tooltip)
    console.log(tooltip)

    //elementOver.datatoggle = "tooltip"
    //elementOver.title = font
}

document.addEventListener("mouseover", giveMeTheFont)

