chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    })
})

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

    if (nextState === "ON") {
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        const response = chrome.tabs.sendMessage(tab.id, {message: "giveMeTheFont"});
        
    } else if (nextState === "OFF") {
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        const response = chrome.tabs.sendMessage(tab.id, {message: "removeTheFont"});
    }
}
);