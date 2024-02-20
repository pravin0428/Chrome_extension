// import puppeteer from "puppeteer";



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text && request.text === "getDOM") {
        const htmlContent = document.documentElement.outerHTML;
        sendResponse({ html: htmlContent }); // Change htmlCode to html
    }
    // if (request.action === "reloadDOM") {
    //     // Reload or update the DOM as needed
    //     // (async () => {
    //     //     // Launch the browser and open a new blank page
    //     //     const browser = await puppeteer.launch({ headless : false });
    //     //     const page = await browser.newPage();
          
    //     //     // Navigate the page to a URL
    //     //     await page.goto(request.linkData);
          
    //     //     // Set screen size
    //     //     await page.setViewport({width: 1080, height: 1024});
          
           
    //     //     await browser.close();
    //     //   })();
    //     const htmlContent = document.documentElement.outerHTML;
    //     console.log(htmlContent , "updated")
    //     sendResponse({ success: true, htmlCode: htmlContent }); // Correct the property name
    // }
});


// chrome.runtime.sendMessage({ action: "reloadDOM", linkData: contactInfoLink }, function(response) {
//     if (response && response.success) {
//         console.log("Reload DOM request sent successfully");
//     } else {
//         console.log("Failed to send reload DOM request");
//     }
// });


//code to reload dom as well 
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.text && request.text === "getDOM") {
        const htmlContent = document.documentElement.outerHTML;
        sendResponse({ html: htmlContent }); // Change htmlCode to html
    }
    console.log( "content.js : " ,  request)
    if (request.action === "reloadDOM") {
        // Send a message to the background script to reload the DOM
        chrome.runtime.sendMessage({ action: "reloadDOM", linkData: request.linkData }, function(response) {
            if (response && response.success) {
                console.log("Reload DOM request sent successfully");
            } else {
                console.log("Failed to send reload DOM request");
            }
        });
    }
});




// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request.text , "here is the message from popup.js")
//     if (request.text && request.text === "getDOM") {
//         const htmlContent = document.documentElement.outerHTML;
//         // const h1Content = document.querySelector("h1")?.textContent || "No h1 tag found";

//         // // Extracting profile picture URL
//         // const profileUrlElement = document.querySelector(".global-nav__me-photo");
//         // const profileUrl = profileUrlElement ? profileUrlElement.getAttribute("src") : "Profile-Picture not found";

//         // // Extracting company name
//         // const companyNameElement = document.querySelector(".artdeco-entity-lockup__title");
//         // const companyName = companyNameElement ? companyNameElement.textContent.trim() : "Company Info Not Found";

//         // // Extracting designation and tech stack
//         // const designationElement = document.querySelector(".artdeco-entity-lockup__subtitle");
//         // const designationAndTechStack = designationElement ? designationElement.textContent.trim() : "Designation and Tech Stack Not Found";

//         // // Extracting location
//         // const locationElement = document.querySelector("span.text-body-small.inline.t-black--light.break-words");
//         // let location = "Location Not Found";
//         // if (locationElement) {
//         //     location = locationElement.textContent.trim();
//         // }

//         // // Extracting number of connections
//         // const connectionsElement = document.querySelector("li.text-body-small span.t-bold");
//         // let connections = "Connections Not Found";
//         // if (connectionsElement) {
//         //     connections = connectionsElement.textContent.trim();
//         // }

//         //  // Extracting email address
//         // let email = "Email Not Found";
//         // const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
//         // const emailCandidates = document.body.textContent.match(emailRegex);
       

//         sendResponse({ 
//             html: htmlContent, 
//             // h1: h1Content, 
//             // profilePic: profileUrl, 
//             // company: companyName,
//             // designationAndTechStack: designationAndTechStack,
//             // location : location,
//             // connections : connections,
//             // emailid: email
//         });
//     }
//     if (request.action === "reloadDOM") {
//         console.log(request.action , "does we are getting the messaage from popup<<<<<<<," )  ;
//         // Reload or update the DOM as needed
//         // For example:
//         htmlContent =  document.documentElement.outerHTML
//         // tempDiv.innerHTML = response.html;
        
//         // Send a response back to the sender (popup.js)
//         sendResponse({ success: true , htmlCode : htmlContent });
        
//     }
// });
 
 
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request.text , "here is the message from popup.js")
//     if (request.text && request.text === "getDOM") {
//         const htmlContent = document.documentElement.outerHTML;
//         const h1Content = document.querySelector("h1")?.textContent || "No h1 tag found";
//         const profileUrl = document.querySelector("img").src || "Profile-Picture not found";

//         // Extracting company name
//         let companyName = "Company Info Not Found";
//         const companyElement = document.querySelector(".member-current-company");
//         if (companyElement) {
//             companyName = companyElement.textContent.trim();
//         }

//         // Extracting designation and tech stack
//         let designationAndTechStack = "Designation and Tech Stack Not Found";
//         const designationElement = document.querySelector("dd.body-small.text-color-text");
//         if (designationElement) {
//             designationAndTechStack = designationElement.textContent.trim();
//         }

       
//         const locationElement = document.querySelector("dd.body-small.text-color-text-low-emphasis");
//         let location = "Location Not Found";
//         if (locationElement) {
//             location = locationElement.textContent.trim();
//             console.log(location , "location str")
//             // Remove connection count part from location string
//             location = location.replace(/\d+ connections?$/, '').trim();
//         }

//         const connectionElement = document.querySelector("a[data-tracking-control-name='connections-count']");
//         let connections = "Connections Not Found";
//         if (connectionElement) {
//             connections = connectionElement.textContent.trim();
//         }

//         // console.log("Company Name:", companyName);
//         // console.log("Working Name:", h1Content);
//         // console.log("Working Name:", profileUrl);
//         // console.log("Working Name:", companyName);
        
//         sendResponse({ 
//             html: htmlContent, 
//             h1: h1Content, 
//             profilePic: profileUrl, 
//             company: companyName,
//             designationAndTechStack: designationAndTechStack,
//             location : location,
//             connections : connections
//         });
//     }
// });