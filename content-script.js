const giveMeTheFont = (event) => {
  const elementClicked = event.target
  const styleofElementCLicked = getComputedStyle(elementClicked)
  const font = styleofElementCLicked.fontFamily
  elementClicked.datatoggle = "tooltip"
  elementClicked.title = font
  console.log("fonction giveMeTheFont = ", elementClicked.datatoggle, elementClicked.title)
}

const removeTheFont = (event) => {
  const elementClicked = event.target
  elementClicked.datatoggle = ""
  elementClicked.title = ""
  console.log("fonction removeTheFont ", elementClicked.datatoggle, elementClicked.title)
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "giveMeTheFont") {
          document.addEventListener("mouseover", giveMeTheFont)
        } else if (request.message = "removeTheFont") {
          document.addEventListener("mouseover", removeTheFont)
        }
      }
      );
      
          


