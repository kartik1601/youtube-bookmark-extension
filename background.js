chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch") && changeInfo.status === 'complete') {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);

        setTimeout(() => {
            chrome.tabs.sendMessage(tabId, {
                type: "NEW",
                videoId: urlParameters.get("v")
            });
        }, 1000); // 1 second delay to ensure content script is ready
    }
});
