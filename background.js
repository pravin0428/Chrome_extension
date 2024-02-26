chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    console.log(request.text, "here is the message from popup.js")
    console.log("background.js : ", request)
    if (request.text && request.text === "getDOM") {
        // Send a message to the content script to retrieve the DOM
        chrome.tabs.sendMessage(sender.tab.id, { text: "getDOM" }, function (response) {
            if (response && response.html) {
                console.log(response.html);  
            } else {
                console.log("Failed to fetch HTML content");
            }
        });
    } else if (request.action === "getContactInfo") {

        const linkData = request.linkData;

        return true;

    }
});