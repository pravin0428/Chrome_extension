// document.addEventListener("DOMContentLoaded", function() {
//     let ourBtn = document.getElementById("powerButton");
//     ourBtn.addEventListener("click", () => {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { text: "getDOM" }, function(response) {
//                 if (response && response.html) {
//                     let container = document.getElementById("container");
//                     container.innerText = response.html; 
                    
//                     // Parse the HTML content to extract name and profile picture
//                     let tempDiv = document.createElement('div');
//                     tempDiv.innerHTML = response.html;
                    
//                     let nameElement = tempDiv.querySelector("h1"); // Assuming name is within an h1 tag
//                     let name = nameElement ? nameElement.innerText : "Name not found";

//                     let profilePicElement = tempDiv.querySelector(".profile-pic"); // Assuming profile picture has a class "profile-pic"
//                     let profilePicSrc = profilePicElement ? profilePicElement.src : "Profile picture not found";

//                     let nameElem = document.getElementById("name");
//                     nameElem.innerText = name;

//                     let profileElem = document.getElementById("profile");
//                     profileElem.src = profilePicSrc;

//                     // Rest of your code remains the same
//                     let companyName = document.getElementById("companyName");
//                     companyName.innerText = `Company Name: ${response.company}`;
//                     let position = document.getElementById("position");
//                     position.innerText =` Designation: ${response.designationAndTechStack}`;
//                     let loc = document.getElementById("loc")
//                     loc.innerText = `Location: ${response.location}`
//                     let connection = document.getElementById("connection")
//                     connection.innerText = `Connections: ${response.connection}`

//                 } else {
//                     let container = document.getElementById("container");
//                     container.innerText = "Failed to fetch HTML content";
//                 }
//             });
//         });
//     });
// });

////////////////////////////////////////////////finel codes////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//     let ourBtn = document.getElementById("powerButton");
//     ourBtn.addEventListener("click", () => {
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { text: "getDOM" }, function(response) {
//                 if (response && response.html) {
//                     // Parse the HTML content to extract data
//                     var data = response.html
//                     let tempDiv = document.getElementById('container');
//                     tempDiv.innerHTML = response.html;

//                     console.log(response.html , "<<whole HTML content>>")
                        
//                     // console.log(htmlToJson(data))
//                     // console.log(JSON.parse(data)) , "check the data is it converting or not"

                    
                    
// // Extract name
// // const nameElement = data.querySelector('.text-heading-xlarge inline t-24 v-align-middle break-words');
// // const name = nameElement.textContent.trim();

// // // Extract profile pic URL
// // const profilePicElement = data.querySelector('.global-nav__me-photo');
// // const profilePicUrl = profilePicElement.getAttribute('src');

// // // Extract designation
// // const designationElement = data.querySelector('.text-body-medium');
// // const designation = designationElement.textContent.trim();

// // // Extract location
// // const locationElement = data.querySelector('.pv-top-card--list-bullet .text-body-small');
 
// // const location = locationElement.textContent.trim();

// // // Extract number of connections
// // const connectionsElement = data.querySelector('.pv-top-card--list-bullet .t-bold');
// // const connections = connectionsElement.textContent.trim();

// // // Extract background image URL
// // const backgroundImageElement = data.querySelector('.profile-background-image__image');
// // const backgroundImageUrl = backgroundImageElement.getAttribute('src');

// // // Extract company logo URL
// // const companyLogoElement = data.querySelector('.ivm-view-attr__img--centered');
// // const companyLogoUrl = companyLogoElement.getAttribute('src');

// // // Extract job title
// // const jobTitleElement = data.querySelector('.pvs-header__title');
// // const jobTitle = jobTitleElement.textContent.trim();

// // // Extract job location
// // const jobLocationElement = data.querySelector('.t-14.t-normal.t-black--light');
// // const jobLocation = jobLocationElement.textContent.trim();

// // Print or use the extracted data
// // console.log('Name:', name);
// // console.log('Profile Pic URL:', profilePicUrl);
// // console.log('Designation:', designation);
// // console.log('Location:', location);
// // console.log('Number of Connections:', connections);
// // console.log('Background Image URL:', backgroundImageUrl);
// // console.log('Company Logo URL:', companyLogoUrl);
// // console.log('Job Title:', jobTitle);
// // console.log('Job Location:', jobLocation);

                      
//                     let nameElement = tempDiv.querySelector("h1");
//                     let name = nameElement ? nameElement.innerText : "Name not found";
//                     console.log("Name:", name);
//                     let nameElemFromHtml = document.getElementById("name");
//                     nameElemFromHtml.innerText = nameElement.innerText ;


                     
//                     // let profilePicElement = tempDiv.querySelectorAll(".global-nav__me-photo");
//                     // console.log(profilePicElement , "profile pic url")
//                     // let profilePicSrc = profilePicElement ? profilePicElement.src : "Profile picture not found";
                               
//                     let companyName = "Company Info Not Found";
//                      const companyElement = tempDiv.querySelector(".member-current-company");
//                      if (companyElement) {
//                      companyName = companyElement.textContent.trim();
//                     }
//                     console.log("Company Name:", companyName);

//                     let workigName = "Workig Info Not Found";
//                     const workingElement = tempDiv.querySelector(".text-body-medium break-words")
//                     if (workingElement) {
//                         workigName = workingElement.textContent.trim();
//                     }
//                     console.log("Working Name:", workigName);
//                     // let profile = document.getElementById("profile");
//                     // profile.src = profilePicSrc;

//                     // Prepare the data object
//                     let newData = {
//                         name: name,
//                         profilePicSrc: response.profileUrl,
//                         companyName: response.company,
//                         desi : response.designationAndTechStack,
                   
//                   tagh1 : response.h1, 
//             pic : response.profilePic,
//             com: response.company,
//             tech : response.designationAndTechStack,
//             loc: response.location,
//             con: response.connections,
//             email_id: response.emailid
//                     };

//                     // Send a POST request to your JSON server
//                     fetch('http://localhost:3000/data', {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json',
//                         },
//                         body: JSON.stringify(newData),
//                     })
//                     .then(response => response.json())
//                     .then(data => {
//                         console.log('Success:', data);
//                     })
//                     .catch((error) => {
//                         console.error('Error:', error);
//                     });

//                 } else {
//                     let container = document.getElementById("container");
//                     container.innerText = "Failed to fetch HTML content";
//                 }
//             });
//         });
//     });
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// import * as puppeteer from './commonjs_puppeteer.js';
// import puppeteer from "./commonjs_puppeteer"
// import cheerio from 'cheerio';

//   const cheerio = require('cheerio');

// import * as cheerio from 'cheerio';

import { Cheerio } from "cheerio";
document.addEventListener("DOMContentLoaded", function() {
    let ourBtn = document.getElementById("powerButton");
    ourBtn.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: "getDOM" }, function(response) {
                if (response && response.html) {

                //   console.log(response.html , "html at top");

                    // const parser = new DOMParser();
                    //                     const doc = parser.parseFromString(response.html, 'text/html');
                                        
                    //                     const profileData = {};

                    //                     // Extract basic profile information
                    //                     const profileNameElement = doc.querySelector('.profile-header h1');
                    //                     if (profileNameElement) {
                    //                       profileData.name = profileNameElement.textContent.trim();
                    //                     }
                                        
                    //                     const profileTitleElement = doc.querySelector('.profile-header h2');
                    //                     if (profileTitleElement) {
                    //                       profileData.title = profileTitleElement.textContent.trim();
                    //                     }
                                        
                    //                     const profileLocationElement = doc.querySelector('.profile-header .location');
                    //                     if (profileLocationElement) {
                    //                       profileData.location = profileLocationElement.textContent.trim();
                    //                     }
                                        
                    //                     const profileConnectionsElement = doc.querySelector('.profile-header .connections');
                    //                     if (profileConnectionsElement) {
                    //                       profileData.connections = profileConnectionsElement.textContent.trim();
                    //                     }
                                        
                    //                     const profileAboutElement = doc.querySelector('.profile-about p');
                    //                     if (profileAboutElement) {
                    //                       profileData.about = profileAboutElement.textContent.trim();
                    //                     }
                                        
                    //                     // Extract contact information
                    //                     const contactTypeSection = doc.querySelector('section.pv-contact-info__contact-type');
                                        
                    //                     // Extract email
                    //                     const emailAnchor = contactTypeSection.querySelector('a.link-without-visited-state');
                    //                     if (emailAnchor) {
                    //                       profileData.email = emailAnchor.textContent.trim();
                    //                     }
                                        
                    //                     // Extract phone number
                    //                     const phoneNumberSpan = contactTypeSection.querySelector('span.t-14.t-black.t-normal');
                    //                     if (phoneNumberSpan) {
                    //                       profileData.phone = phoneNumberSpan.textContent.trim();
                    //                     }
                                        
                    //                     // Extract experience information
                    //                     const experienceItems = doc.querySelectorAll('.experience .experience-item');
                    //                     profileData.experience = Array.from(experienceItems).map(item => {
                    //                       const title = item.querySelector('.item-title').textContent.trim();
                    //                       const company = item.querySelector('.item-subtitle').textContent.trim();
                    //                       const duration = item.querySelector('.date-range').textContent.trim();
                    //                       return { title, company, duration };
                    //                     });
                                        
                    //                     // Extract education information
                    //                     const educationItems = doc.querySelectorAll('.education .education-item');
                    //                     profileData.education = Array.from(educationItems).map(item => {
                    //                       const institution = item.querySelector('.item-title').textContent.trim();
                    //                       const degree = item.querySelector('.item-subtitle').textContent.trim();
                    //                       const duration = item.querySelector('.date-range').textContent.trim();
                    //                       return { institution, degree, duration };
                    //                     });
                                        
                    //                     // Convert the JavaScript object to JSON
                    //                     const profileJSON = JSON.stringify(profileData, null, 2);

                    

                    // // Output the JSON data
                    // console.log(profileJSON , "this is the json data");









































                                        // Parse the HTML content to extract data
                    // const jsonData = htmlToJson(response.html);
                    // console.log(JSON.stringify(jsonData, null, 2) , "last json data"); // Convert JSON to a formatted string for better readability

                    // const jsonObject = getJSONFromDOMElement(response.html); 
                    // const jsonString = JSON.stringify(jsonObject);
                    // console.log(jsonString , "check we are getting the json")


                    let tempDiv = document.createElement('div');
                    tempDiv.innerHTML = response.html;
                    

                    let containerDiv = document.getElementById("container");
                    containerDiv.innerText =  response.html;
                    
                    let nameElement = tempDiv.querySelector("h1");
                    let name = nameElement ? nameElement.innerText : "Name not found";
                    // console.log("Name:", name);
                    let nameElemFromHtml = document.getElementById("name");
                    nameElemFromHtml.innerText = `User Name: ${name}`;

           
                   
                    let newProfileUrlExtraxtion = tempDiv.querySelector(".pv-top-card-profile-picture__image")
                    let profilePicSrc = newProfileUrlExtraxtion ? newProfileUrlExtraxtion.src : "unable to get the url" 
                    // console.log(profilePicSrc , "????????")

                    let profile = document.getElementById("profile");
                    profile.src = profilePicSrc;

                    // let companyNameElement = tempDiv.querySelector(".artdeco-entity-lockup__title");
                    let companyNameElement = tempDiv.querySelector(".LambtnPsginIigeSQDelZWXHxsIhOOCpyDZs");
                     
                    let companyName = companyNameElement ? companyNameElement.innerText.trim() : "Company Info Not Found";
                    // console.log("Company Name:", companyName);
                    let comp = document.getElementById("companyName")
                    comp.innerText = `Company Name: ${companyName}`;
                    // const divElement = tempDiv.querySelector('.wGuEiyzQpeqWbEKqjCeQutIxAdfspgctLfs');
                    // const textContent = divElement.textContent.trim();
                    // console.log(textContent , "company name extractes from top right corner");
                    // wGuEiyzQpeqWbEKqjCeQutIxAdfspgctLfs inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp inline

                    let designationElement = tempDiv.querySelector(".artdeco-entity-lockup__subtitle");
                    let designationAndTechStack = designationElement ? designationElement.innerText.trim() : "Designation and Tech Stack Not Found";
                    // console.log("Designation and Tech Stack:", designationAndTechStack);
                    let position = document.getElementById("position")
                    position.innerText = `Position: ${designationAndTechStack}`;

                    let locationElement = tempDiv.querySelector("span.text-body-small.inline.t-black--light.break-words");
                    let location = locationElement ? locationElement.innerText.trim() : "Location Not Found";
                    // console.log("Location:", location);
                    let loc = document.getElementById("location_details")
                    loc.innerText = `Location: ${location}`;

                    let connectionsElement = tempDiv.querySelector("li.text-body-small span.t-bold");
                    let connections = connectionsElement ? connectionsElement.innerText.trim() : "Connections Not Found";
                    console.log("Connections:", connections);
                    // let connection = document.getElementById("connection")
                    connection.innerText = `Connections: ${connections}`;

                   
                    let emailElement = tempDiv.querySelector('.AHNLAnkaBcZbAlkLZnoQDapVyXSnnEYZgE');
                    let email = emailElement ? emailElement.innerText.trim() : "Email Not Found";
                    // console.log("Email address:", email );

                     
                    // //contact information 100% working finel code 

                    // // Select all contact info sections
                    // const contactSections = tempDiv.querySelectorAll('.pv-contact-info__contact-type');
                    // const contactInfo = {};
                    // // Iterate over each contact section
                    // contactSections.forEach(section => {
                    //     // Extract the header
                    //     const headerElement = section.querySelector('.pv-contact-info__header');
                    //     const header = headerElement ? headerElement.textContent.trim() : null;
                        
                     
                    //     const contactElement = section.querySelector('.pv-contact-info__ci-container a');
                    //     const contact = contactElement ? contactElement.textContent.trim() : null;
                        
                    //     // Store the extracted information in the contactInfo object
                    //     if (header && contact) {
                    //         contactInfo[header] = contact;
                    //     }
                    // });
      
                    // Prepare the data object
                    
                    // Find the "Contact info" link by its ID
     
                   // const contactInfoLink = document.getElementById('top-card-text-details-contact-info');
                   // console.log(contactInfoLink, "elem");

                 const elem = tempDiv.querySelector('#top-card-text-details-contact-info')   //correct
                //  console.log(elem  , "we got the acces of contact info button...");          // correct
                // elem.click()  && console.log("contact info clicked")



//  experimetal area for the contact info-------------------------------------------

if(elem){
    let href = elem.getAttribute('href');

    const contactInfoLink = `https://www.linkedin.com${href}`;
    
    console.log(contactInfoLink ,  "here is our finel contat link");

    // Check if the link exists
if (contactInfoLink) {

// Event listener for button click
document.getElementById('new_contact_btn').addEventListener('click', async () => {
    await runScraping();
});

async function runScraping() {
    try {
        // Fetch the HTML content of the contact info link
        const response = await fetch(contactInfoLink);
        const html = await response.text();

        // Load the HTML content into Cheerio
        const $ = Cheerio.load(html);

        // Add your scraping logic using Cheerio here
        // For example, you can select and extract specific elements from the page

        // Example: Extract text content of all <p> tags
        $('p').each((index, element) => {
            console.log($(element).text());
        });

        // Example: Extract the value of a specific element by its class
        const contactInfo = $('.contact-info').text();
        console.log('Contact Info:', contactInfo);

    } catch (error) {
        console.error('Error scraping contact info:', error);
    }
}

// Event listener for button click
 

    // Simulate a click event on the link
    // contactInfoLink.click();
    // contactInfoLink.dispatchEvent(new MouseEvent('click'));
    // Wait for the modal to open and contact information to be available
                        // setTimeout(() => {
                        //     // Select all contact info sections
                        //     const contactSections = tempDiv.querySelectorAll('.pv-contact-info__contact-type');

                        //     // Define an object to store the extracted information
                        //     const contactInfo = {};

                        //     // Iterate over each contact section
                        //     contactSections.forEach(section => {
                        //         // Extract the header
                        //         const headerElement = section.querySelector('.pv-contact-info__header');
                        //         const header = headerElement ? headerElement.textContent.trim() : null;

                        //         // Extract the contact information
                        //         const contactElement = section.querySelector('.pv-contact-info__ci-container a');
                        //         const contact = contactElement ? contactElement.textContent.trim() : null;

                        //         // Store the extracted information in the contactInfo object
                        //         if (header && contact) {
                        //             contactInfo[header] = contact;
                        //         }
                        //     });

                        //     // Log the extracted contact information
                        //     console.log(contactInfo  , "does we are gettiging contact information??????????");
                        // }, 2000); // Adjust the timeout value as needed
} else {
    console.log("Contact info link not found.");
}

}else{
    console.log("Contact info link not found.");
}

//  experimetal area for the contact info-------------------------------------------















 //-----------------contact info usig js simulation --------------------
 
 
                // if (elem) {                                                                  //done
                //     let href = elem.getAttribute('href');                                    //done
                //     const contactInfoLink = `https://www.linkedin.com${href}`;               //done
                //     console.log(contactInfoLink, "here is our final contact link");          //done

                     

 
                    
                // if (contactInfoLink) {
                //         setTimeout(() => {

                //             // console.log(tempDiv, "before contact info clicked")
                //             // let get_contact_btn = document.getElementById('new_contact_btn')
                
                //             // get_contact_btn.addEventListener('click', function () {
                //             //     console.log("you're on contact page ")
                //             //     window.location.href = contactInfoLink;
                //             //     console.log(tempDiv, "tempdiv data updated")
                //             //     console.log("contact page successfully visited ")
                //             // });

                //              let get_contact_btn = document.getElementById('new_contact_btn');
                //             // get_contact_btn.addEventListener('click', function() {
                //             //     console.log("you're on contact page ")
                //             //     window.location.href = contactInfoLink;
                //             //     // window.location.replace(contactInfoLink)
                //             //     console.log(tempDiv, "tempdiv before reload")
                //             //     console.log("contact page successfully visited ")
                //             //     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                //             //         chrome.tabs.sendMessage(tabs[0].id, { action: "reloadDOM" }, function(response) {

                //             //             console.log("beafore" , response)
                //             //             if (response && response.success) {
                //             //                 console.log(response.htmlCode , "updated responce data after reload")
                //             //             console.log("after" , response)

                //             //                 console.log("DOM reloaded successfully");
                //             //                 // Optionally, perform further actions in the popup script
                //             //             } else {
                //             //                 console.log("Failed to reload DOM");
                //             //             }
                //             //         });
                //             //     });
                //             // });

                //             get_contact_btn.addEventListener('click', function() {
                                
                //                 console.log("you're on contact page ")
                //                window.location.href = contactInfoLink;
                //                 // window.open(contactInfoLink);


                //                 console.log(tempDiv, "tempdiv before reload")
                //                 console.log("contact page successfully visited ")
                //                 chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                //                     chrome.tabs.sendMessage(tabs[0].id, { action: "reloadDOM" , linkData : contactInfoLink }, function(response) {
                //                         if (response && response.success) {

                //                              console.log(response, "updated response data after reload");
                //                             // console.log("DOM reloaded successfully");
                //                               let newDomData = response.htmlData
                //                             // console.log(tempDiv, "tempdiv data before maping")
                //                             const contactSections = newDomData.querySelectorAll('.pv-contact-info__contact-type');
                //                             // console.log(contactSections , "contact section html")
                //                             const contactInfo = {};
                //                             // // Iterate over each contact section
                //                             contactSections.forEach(section => {
                //                                 // Extract the header
                //                                 const headerElement = section.querySelector('.pv-contact-info__header');
                //                                 const header = headerElement ? headerElement.textContent.trim() : null;
                                
                //                                 const contactElement = section.querySelector('.pv-contact-info__ci-container a');
                //                                 const contact = contactElement ? contactElement.textContent.trim() : null;
                                
                //                                 // Store the extracted information in the contactInfo object
                //                                 if (header && contact) {
                //                                     contactInfo[header] = contact;
                //                                 }
                //                              });
                                
                //                             // console.log(contactInfo, "contact info extracted from the page");
                //                             // Optionally, perform further actions in the popup script
                //                          } else {
                //                         //     console.log("Failed to reload DOM");
                //                          }
                //                     });
                //                  });
                //             });
                //             // Select all contact info sections
                          
                            
                //         }, 1000); // Wait for 1 second for the asynchronous operation to complete
                //     } else {
                //         console.log("Contact info href not found.");
                //     }
                // } else {
                //     console.log("Contact info button not found.");
                // }


  //-----------------contact info usig js simulation --------|||||------------               

 //-------------------------------this is my last code to get the contact info when we opened contact info modal ---------------------------               

// if(elem){
//     let href = elem.getAttribute('href');

//     const contactInfoLink = `https://www.linkedin.com${href}`;
    
//     console.log(contactInfoLink ,  "here is our finel contat link");

//     // Check if the link exists
// if (contactInfoLink) {

//    let get_contact_btn =  document.getElementById('new_contact_btn')
//    get_contact_btn.href = contactInfoLink
//     // Simulate a click event on the link
//     // contactInfoLink.click();
//     // contactInfoLink.dispatchEvent(new MouseEvent('click'));
//     // Wait for the modal to open and contact information to be available
//     setTimeout(() => {
//         // Select all contact info sections
//         const contactSections = tempDiv.querySelectorAll('.pv-contact-info__contact-type');

//         // Define an object to store the extracted information
//         const contactInfo = {};

//         // Iterate over each contact section
//         contactSections.forEach(section => {
//             // Extract the header
//             const headerElement = section.querySelector('.pv-contact-info__header');
//             const header = headerElement ? headerElement.textContent.trim() : null;

//             // Extract the contact information
//             const contactElement = section.querySelector('.pv-contact-info__ci-container a');
//             const contact = contactElement ? contactElement.textContent.trim() : null;

//             // Store the extracted information in the contactInfo object
//             if (header && contact) {
//                 contactInfo[header] = contact;
//             }
//         });

//         // Log the extracted contact information
//         console.log(contactInfo  , "does we are gettiging contact information??????????");
//     }, 2000); // Adjust the timeout value as needed
// } else {
//     console.log("Contact info link not found.");
// }

// }else{
//     console.log("Contact info link not found.");
// }


//-----------------------------very imp code do not remove it ---------------------------------------


//contact info extraction using http request

// const elem = tempDiv.querySelector('#top-card-text-details-contact-info');
// console.log(elem, "we got access to the contact info button...");

// if (elem) {
//     const href = elem.getAttribute('href');
//     const contactInfoLink = `https://www.linkedin.com${href}`;
//     console.log(contactInfoLink, "here is our final contact link");

//     // Make a fetch request to the contact info link
//     fetch(contactInfoLink)
//         .then(response => response.text())
//         .then(data => {
//             console.log(data, "here is the data ?????******??????")
//             // Create a temporary DOM element to parse the HTML response
//             const tempElement = document.createElement('div');
//             tempElement.innerHTML = data;

//             // Select all contact info sections
//             const contactSections = tempElement.querySelectorAll('.pv-contact-info__contact-type');
//             const contactInfo = {};

//             // Iterate over each contact section
//             contactSections.forEach(section => {
//                 // Extract the header
//                 const headerElement = section.querySelector('.pv-contact-info__header');
//                 const header = headerElement ? headerElement.textContent.trim() : null;

//                 const contactElement = section.querySelector('.pv-contact-info__ci-container a');
//                 const contact = contactElement ? contactElement.textContent.trim() : null;

//                 // Store the extracted information in the contactInfo object
//                 if (header && contact) {
//                     contactInfo[header] = contact;
//                 }
//             });

//             console.log(contactInfo, "contact info extracted from the page");
//         })
//         .catch(error => {
//             console.error("Error fetching contact info:", error);
//         });
// } else {
//     console.log("Element is not provided.");
// }

 

                    
                    let newData = {
                        name: name,
                        profilePicSrc: profilePicSrc,
                        companyName: companyName,
                        designationAndTechStack: designationAndTechStack,
                        location: location,
                        connections: connections,
                        // contactInfo: contactInfo
                        // email: email
                    };

                    // Send newData to the desired destination (e.g., post to server, display on popup)
                    // console.log(newData , "entered data");

                      fetch('http://localhost:3000/data', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

                } else {
                    let container = document.getElementById("container");
                    container.innerText = "Failed to fetch HTML content";
                }
            });
        });
    });
});




//converting html to json

// function htmlToJson(htmlString) {
//     // console.log(htmlString , "checking string only")
//     const parser = new DOMParser();
//     console.log(parser , "2nd check")
//     const doc = parser.parseFromString(htmlString, 'text/html');
//     console.log(doc , "3rd check")
//     const header = doc.querySelector('header');
//     const body = doc.querySelector('body');
//     console.log(header, "4th check")
//     function parseNode(node) {
//         console.log(node, "5th check")
//         const json = {};
//         const children = node.childNodes;
//         console.log(children, "6th check")
//         for (let i = 0; i < children.length; i++) {
//               const child = children[i];
//               console.log(child, "7th check") // it is working fine till here
//               console.log(child.nodeType , Node.ELEMENT_NODE , "here cheking for nodetype >>>>>>>>><<<<<<<<<<<")
         
//             let a = child.nodeType;
//             json.nodeType = a;
//             if(a === 3){
//                 json.text = element.textContent;
//             }else if (a === 1) {
//                 json.nodeName = element.nodeName;
//                 let b = element.attributes;
//                     json.nodeType = a;
//                      console.log(b , "3rd check")
//                 if (b && b.length>0) {
//                     let attributes = {};
//                     for (let i = 0; i < b.length; i++) {
//                         const attribute = b[i];
//                         attributes[attribute.name] = attribute.value;
//                     }
//                     console.log(attributes , "4rth check")
//                     json.attributes = attributes;
//                 }
//                 if (json.nodeName === "svg") {
//                     json.innerHTML = element.innerHTML;
//                 }else{
//                     let c = element.childNodes;
//                     if (c && c.length>0) {
//                         let childNodes = [];
//                         c.forEach((child)=>{
//                             let r = getJSONFromDOMElement(child);
//                             if(r) childNodes.push(r);
//                         });
//                         json.childNodes = childNodes;
//                     }
//                 }
            

//         }
//         console.log(result, "11th check")
//         return result;
//     }
// console.log(parseNode(body), "12th check")
//     return parseNode(body);
// }

// function htmlToJson(htmlString) {
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlString, 'text/html');
//     const header = doc.querySelector('header');
//     const body = doc.querySelector('body');
    
//     function parseNode(node) {
//         const json = {};
//         const children = node.childNodes;
        
//         for (let i = 0; i < children.length; i++) {
//             const child = children[i];
//             let nodeType = child.nodeType;
//             json.nodeType = nodeType;
            
//             if (nodeType === 3) {
//                 json.text = child.textContent;
//             } else if (nodeType === 1) {
//                 json.nodeName = child.nodeName;
//                 let attributes = child.attributes;
                
//                 if (attributes && attributes.length > 0) {
//                     let attributesObj = {};
//                     for (let j = 0; j < attributes.length; j++) {
//                         const attribute = attributes[j];
//                         attributesObj[attribute.name] = attribute.value;
//                     }
//                     json.attributes = attributesObj;
//                 }
                
//                 if (json.nodeName === "svg") {
//                     json.innerHTML = child.innerHTML;
//                 } else {
//                     let childNodes = [];
//                     let grandchildren = child.childNodes;
//                     if (grandchildren && grandchildren.length > 0) {
//                         grandchildren.forEach((grandchild) => {
//                             let result = parseNode(grandchild);
//                             if (result) childNodes.push(result);
//                         });
//                         json.childNodes = childNodes;
//                     }
//                 }
//             }
//         }
//         return json;
//     }

//     return parseNode(body);
// }





// function getJSONFromDOMElement({element}){
//     console.log(element  , "1st check")    
//     if (!element || typeof element !== 'object') {
//         return null;
//     }
//     console.log(element.nodeType? element.nodeType : "not reatched at 2nd step")
//     const json = {};
//     let a = element.nodeType;
//     json.nodeType = a;
//     if(a === 3){
//         json.text = element.textContent;
//     }else if (a === 1) {
//         json.nodeName = element.nodeName;
//         let b = element.attributes;
//             json.nodeType = a;
//              console.log(b , "3rd check")
//         if (b && b.length>0) {
//             let attributes = {};
//             for (let i = 0; i < b.length; i++) {
//                 const attribute = b[i];
//                 attributes[attribute.name] = attribute.value;
//             }
//             console.log(attributes , "4rth check")
//             json.attributes = attributes;
//         }
//         if (json.nodeName === "svg") {
//             json.innerHTML = element.innerHTML;
//         }else{
//             let c = element.childNodes;
//             if (c && c.length>0) {
//                 let childNodes = [];
//                 c.forEach((child)=>{
//                     let r = getJSONFromDOMElement(child);
//                     if(r) childNodes.push(r);
//                 });
//                 json.childNodes = childNodes;
//             }
//         }
//     }else return null;
//     return json;
// }



 

