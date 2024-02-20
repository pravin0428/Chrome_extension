chrome.action.onClicked.addListener((tab) => {
    console.log(tab, "current tab");
    chrome.tabs.sendMessage(tab.id, { text: "getDOM" }, function(response) {
        if (response && response.html) {
            console.log(response.html); // Log the HTML content received from the content script
        } else {
            console.log("Failed to fetch HTML content");
        }
    });

});


// const puppeteer = require('puppeteer');
// chrome.runtime.onMessage.addListener( async(request, sender, sendResponse) => {
//     console.log(request.text, "here is the message from popup.js")
//     console.log( "background.js : " ,  request)
//     if (request.text && request.text === "getDOM") {
//         // Send a message to the content script to retrieve the DOM
//         chrome.tabs.sendMessage(sender.tab.id, { text: "getDOM" }, function(response) {
//             if (response && response.html) {
//                 console.log(response.html); // Log the HTML content received from the content script
//             } else {
//                 console.log("Failed to fetch HTML content");
//             }
//         });
//     } else if (request.action === "reloadDOM") {
        
//         const linkData = request.linkData;
//         try {
//             // Launch Puppeteer and open a new page
//             const browser = await puppeteer.launch({headless: false});
//             const page = await browser.newPage();
            
//             // Navigate to the contact page
//             await page.goto(linkData);

//             // Extract information or manipulate the page using Puppeteer
//             // Example: const email = await page.$eval('.AHNLAnkaBcZbAlkLZnoQDapVyXSnnEYZgE', element => element.innerText.trim());

//             // Once done, close Puppeteer browser
//             await new Promise(resolve => setTimeout(resolve , 7000))
//             await browser.close();

//             // Send a response back to the popup script
//             sendResponse({ success: true });
//         } catch (error) {
//             console.error('Error occurred while using Puppeteer:', error);
//             sendResponse({ success: false, error: error.message });
//         }
        
//         // Return true to indicate that the response will be sent asynchronously
//         return true;
    
//     }
// });