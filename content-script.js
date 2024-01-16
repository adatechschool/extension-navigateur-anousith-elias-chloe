
const giveMeTheFont = (event) => {

    const elementClicked = event.target
    const styleofElementCLicked = getComputedStyle(elementClicked)
    const font = styleofElementCLicked.fontFamily
    elementClicked.datatoggle = "tooltip"
    elementClicked.title = font
};

/*const removeTheFont = (event) => {
    const elementClicked = event.target
    elementClicked.datatoggle = ""
    elementClicked.title = ""
    console.log("datatogfle = ", elementClicked.datatoggle)
    console.log("elementClicked.title", elementClicked.title)
}
*/
chrome.runtime.onMessage.addListener(
    function(request, sender, sendMessage) {
        document.addEventListener('click', (event) => {
            if(request.message === "giveMeTheFont") {
                console.log("focntion giveMeTheFont")
                giveMeTheFont(event)
            }else if (request.message === "removeTheFont") {
                console.log("fonction removeTheFont") 
                removeTheFont(event)
                document.addEventListener("click", removeTheFont)
            }
        }) 
    }
)
 


  const elementClicked = event.target
  const styleofElementCLicked = getComputedStyle(elementClicked)
  const font = styleofElementCLicked.fontFamily
  elementClicked.datatoggle = "tooltip"
  elementClicked.title = font
  console.log("fonction giveMeTheFont = ", elementClicked.datatoggle, elementClicked.title)


const removeTheFont = (event) => {
  const elementClicked = event.target
  elementClicked.datatoggle = ""
  elementClicked.title = ""
  console.log("fonction removeTheFont ", elementClicked.datatoggle, elementClicked.title)
}


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "giveMeTheFont") {
      document.removeEventListener("mouseover", removeTheFont)
      document.addEventListener("mouseover", giveMeTheFont)
    } else if (request.message = "removeTheFont") {
      document.removeEventListener("mouseover", giveMeTheFont)
      document.addEventListener("mouseover", removeTheFont)
    }
    delete request.message
  }
);




//    function(request, sender, sendResponse) {
  
// const giveMeTheFont = (event) => {
//     const elementClicked = event.target
//     const styleofElementCLicked = getComputedStyle(elementClicked)
//     const font = styleofElementCLicked.fontFamily
//     elementClicked.datatoggle = "tooltip"
//     elementClicked.title = font
// }
// document.addEventListener("mouseover", giveMeTheFont)