//Initialisation du bouton sur OFF
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    })
})

//Configuration du bouton ON/OFF sur l'icone de l'extension
chrome.action.onClicked.addListener(async (tab) => {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });

    //Envoi de messages au content-script en fonction de l'état du bouton
    if (nextState === "ON") {
        // Récupère l'id de l'onglet actif
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        // Envoi un message à l'onglet actif
        const response = chrome.tabs.sendMessage(tab.id, {message: "giveMeTheFontWhenButtonOn"});
        
    } else if (nextState === "OFF") {
        // Récupère l'id de l'onglet actif
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        // Envoi un message à l'onglet actif
        const response = chrome.tabs.sendMessage(tab.id, {message: "removeTheFontWhenButtonOff"});
    }
}
);