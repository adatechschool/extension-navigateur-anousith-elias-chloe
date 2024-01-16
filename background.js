
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
        console.log("on")
    } else if (nextState === "OFF") {
        console.log("off")
    }
}
);
// (async () => {
//     const response = await chrome.runtime.sendMessage({greeting: "hello" })
//     console.log(response)
// })()
// (async () => {
//     const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
//     console.log(tab)
//     console.log("tab = ", [tab][0])
//     console.log("tab.id ", [tab][0].id)
//     const response = chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
//     // do something with response here, not outside the function
//     console.log("response = ", response);
// })()




