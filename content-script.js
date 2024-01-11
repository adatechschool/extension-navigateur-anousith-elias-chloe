console.log("hello world")

const giveMeTheFont = (event) => {
    const elementClicked = event.target
    const styleofElementCLicked = getComputedStyle(elementClicked)
    const font = styleofElementCLicked.fontFamily
    console.log(font)
}

document.addEventListener("click", giveMeTheFont);

window.open('https://javascript.info');

// popup autorisée
button.onclick = () => {
  window.open('https://javascript.info');
};
