const giveMeTheFont = (event) => {
<<<<<<< HEAD
    const elementOver = event.target // l'evenement se déroule lors du clic
    elementOver.className += " tooltip-container"
    const styleofElementOver = getComputedStyle(elementOver)
    const font = styleofElementOver.fontFamily
   /* const body = document.querySelector("body")*/
    const tooltip = document.createElement('div') // ont créer un élément enfant qui est la div avec laquelle otn manipulera le CSS
    tooltip.className = "tooltip" 
    tooltip.textContent = font // ici, ont appel la variable font qui contient toute les polices
    elementOver.appendChild(tooltip)
    console.log(tooltip)

    //elementOver.datatoggle = "tooltip"
    //elementOver.title = font
}

document.addEventListener("click", giveMeTheFont)
=======
    const elementClicked = event.target
    const styleofElementCLicked = getComputedStyle(elementClicked)
    const font = styleofElementCLicked.fontFamily
    elementClicked.datatoggle = "tooltip"
    elementClicked.title = font
}

document.addEventListener("mouseover", giveMeTheFont)

>>>>>>> c0cd6445c4ab0467d677c927bcc65e96830e0c81

