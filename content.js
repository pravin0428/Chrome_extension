chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // console.log(request.url , "ckecking url in the content.js")
    if (request.text && request.text === "getDOM") {
        const htmlContent = document.documentElement.outerHTML;
        sendResponse({ html: htmlContent });
    }  else if (request.text && request.text === "getContactInfo") {
        // Handle message to fetch DOM data from the provided URL
        const iframe = document.createElement('iframe');
        iframe.src = request.url;
        
        // Set up onload event for the iframe to access its contents
        iframe.onload = () => {
            // Access the content of the iframe and send it back as a response
            const iframeContent = iframe.contentDocument.documentElement.outerHTML;
            sendResponse({ html: iframeContent });
        };
        
        // Append the iframe to the document to trigger loading
        document.body.appendChild(iframe);
        // Return true to indicate that sendResponse will be called asynchronously
        return true;
    }else if (request.text === "reloadDOM") {
        // Handle reload DOM request if needed
        console.log("dome reloaded")
    }
});

 