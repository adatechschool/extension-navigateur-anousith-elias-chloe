const giveMeTheFont = (event) => {
  const elementClicked = event.target
  // Récupère les éléments CSS de l'élément survolé par la souris, puis récupère la font-family
  const styleofElementCLicked = getComputedStyle(elementClicked)
  const font = styleofElementCLicked.fontFamily

  // Setup du tooltip
  elementClicked.datatoggle = "tooltip"
  elementClicked.title = font
  // console.log("fonction giveMeTheFont = ", elementClicked.datatoggle, elementClicked.title)
}

const removeTheFont = (event) => {
  const elementClicked = event.target
  // Delete le contenu du tooltip
  elementClicked.datatoggle = ""
  elementClicked.title = ""
  // console.log("fonction removeTheFont ", elementClicked.datatoggle, elementClicked.title)
}

// Ecoute les messages reçus par le background
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "giveMeTheFontWhenButtonOn") {
      // Supprime l'event listener de l'état précédent, puis active l'event listener de l'état actuel (pour éviter la superposition/conflit entre les deux event listener)
      document.removeEventListener("mouseover", removeTheFont)
      document.addEventListener("mouseover", giveMeTheFont)
    } else if (request.message = "removeTheFontWhenButtonOff") {
      // Supprime l'event listener de l'état précédent, puis active l'event listener de l'état actuel (pour éviter la superposition/conflit entre les deux event listener)
      document.removeEventListener("mouseover", giveMeTheFont)
      document.addEventListener("mouseover", removeTheFont)
    }

    // Reset le contenu des messages pour éviter la superposition/conflit des deux messages
    delete request.message
  }
);

