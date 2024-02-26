document.addEventListener("DOMContentLoaded", function () {
    let ourBtn = document.getElementById("powerButton");
    ourBtn.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { text: "getDOM" }, function (response) {
                if (response && response.html) {


                    // console.log(response.html , "html data to send in the education function")
                    let tempDiv = document.createElement('div');
                    tempDiv.innerHTML = response.html;

                    // document.getElementById("all_info").addEventListener("click" , ()=>{
                    //     let containerDiv = document.getElementById("container");
                    // containerDiv.innerHTML = response.html;
                    // console.log(response.html , "entaire html") 
                    // })
                    // console.log(response.html , "tempdiv data");


////------------------------------------Education details fetching-----------------------------------------------------------////                    
                    // function htmlToJSON() {
                       
                        const data = {};

                        // Extract relevant information and add it to the object
                        // data.title = tempDiv.querySelector('h1').innerText.trim();
                        // data.content = tempDiv.querySelector('p').innerText.trim();
                    
                        // Extract education details
                        const listItems = tempDiv.querySelectorAll('li');
                        const education = [];
                    
                        // listItems.forEach((item, index) => {
                        //     const text = item.innerText.replace(/\s+/g, ' ').trim();
                        //     if (text.includes("Bachelor") || text.includes("Master") || text.includes("Degree")) {
                        //         const educationDetail = {
                        //             id: index + 1,
                        //             degree: text.split(',')[0].trim(),
                        //             institution: text.split(',')[1].trim(),
                        //             dates: text.split(',')[2].trim()
                        //         };
                        //         education.push(educationDetail);
                        //     }
                        // });


                        //handling trim adge case here------------
                        listItems.forEach((item, index) => {
                            if (item.innerText) { // Check if item.innerText is defined
                                const text = item.innerText.replace(/\s+/g, ' ').trim();
                                console.log(text , "checkout the education text here")
                                 if (text.includes("Bachelor") || text.includes("Bachelor's") || text.includes("Master") || text.includes("Degree") || text.includes("Deploma") || text.includes("Diploma") || text.includes("10th") || text.includes("SSC") || text.includes("HSC") || text.includes("Iti") || text.includes("12")) {
                                    console.log(text , "<<<<<education text>>>>>>")
                                    const splitText = text.split(',');
                                    
                                    if (splitText.length >= 3) { // Ensure splitText has at least 3 elements
                                        const educationDetail = {
                                            id: index + 1,
                                            degree: splitText[0].trim(),
                                            institution: splitText[1].trim(),
                                            dates: splitText[2].trim()
                                        };
                                        education.push(educationDetail);
                                    }
                                }
                            }
                        });
                    
                        data.education = education;
                    
                        // // Extract about information
                        // const aboutDiv = document.querySelector('.CgaNGyysQhGiLrJThBkklWezGqoIdPPHmeZoo');
                        // if (aboutDiv) {
                        //     const aboutTextElement = aboutDiv.querySelector('.pv-shared-text-with-see-more span[aria-hidden="true"]');
                        //     if (aboutTextElement) {
                        //         let aboutText = aboutTextElement.innerText.trim();
                        //         aboutText = aboutText.replace(/\s+/g, ' ');
                        //         data.about = aboutText;
                        //     }
                        // }
                    
                        // Convert object to JSON with compact output
                        const jsonData = JSON.stringify(data, null, 0);
                        console.log(jsonData);
                    // }
                    
                    // Call the function
                    // htmlToJSON();



                    document.getElementById("education_btn").addEventListener("click" , ()=>{
                       let educationCont =  document.getElementById("educationContainer")
                    //    educationCont.innerHTML = null

                     console.log(education ,"education data checking maping in ui")

                      if(education.length === 0){
                        let educationAlertText = document.createElement("p")
                        educationAlertText.innerText = "Education details unavailable"
                        educationCont.append(educationAlertText)

                      }else{
                        education.forEach(function(edu) {
                            var educationDiv = document.createElement("div");
                            educationDiv.classList.add("experience-item");
                    
                         
                            var degree = document.createElement("p");
                            degree.textContent = edu.degree;
                            educationDiv.appendChild(degree);
                    
                            var institution = document.createElement("p");
                            institution.textContent = "Company: " + edu.institution;
                            educationDiv.appendChild(institution);
                    
                            var dates = document.createElement("p");
                            dates.textContent = "Employment Type: " + edu.dates;
                            educationDiv.appendChild(dates);
                    
                            
                    
                            educationCont.appendChild(educationDiv);
                        });
                      }
                       

                    })


////-------------------------------------------------------End of Education details fetching---------------------------------------------------------------////                      
                   

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


                    //get about information 
                    // const divElement = tempDiv.querySelector('.mHrcZJyKLnyUiYvgpBuGIXUGIGUXSIackjDqw');
                    // if (divElement) {
                    //     const aboutInfo = divElement.textContent.trim();
                    //     console.log(aboutInfo , "about info");
                    // } else {
                    //     console.error('Div element not found.');
                    // }
                    
                    //  document.getElementById("education_btn").addEventListener("click" , ()=>{
                    // //   getEducationDetails(response.html)
                    //   var educationJSON = getEducationDetails(response.html);
                    //   console.log(JSON.stringify(educationJSON, null, 2));


                    //  })
 

 
//-----------------------------------Experiance data company names starts here------------------------------------------------------------------------//
                   
                        // const experienceItems = tempDiv.querySelectorAll('.NgipKwWYJKLrPQGMygNPbSJlxSTCBvo');

                        // // Extract text from each experience item
                        // const experiences = [];
                        // experienceItems.forEach(item => {
                        //     const companyName = item.querySelector('.mHrcZJyKLnyUiYvgpBuGIXUGIGUXSIackjDqw').textContent.trim();
                        //     experiences.push(companyName);
                        // });

                        // console.log(experiences  , "does we are getting the experiance here");
                        // document.getElementById("experience_btn").addEventListener("click" , ()=> {
                        //     experiences.map((elem)=>{
                        //         document.getElementById("experienceContainer").innerText = elem
                        //     })
                        // })
                        // const exp = document.getElementById("experienceContainer")

                        // Find all experience sections
const experienceSections = tempDiv.querySelectorAll('.artdeco-list__item');
// console.log(experienceSections , "experience Section selected in js")
// Initialize an empty array to store experiences
const experiences = [];

// Iterate over each experience section
experienceSections.forEach(section => {
    // Initialize an empty object to store details of each experience
    const experience = {};

    // Extracting company logo URL
    const logo = section.querySelector('.ivm-view-attr__img--centered');
    if (logo) {
        experience.company_logo_url = logo.getAttribute('src');
    }

    // Extracting job title
    const jobTitle = section.querySelector('.t-bold');
    if (jobTitle) {
        experience.job_title = jobTitle.textContent.trim();
    }

    // Extracting company name and employment type
    const companyInfo = section.querySelector('.t-14.t-normal');
    
    if (companyInfo) {
        const companyInfoText = companyInfo.textContent.trim().split(' · ');
        // console.log(companyInfoText , "are we getting the company info")
        if (companyInfoText.length >1) {
            experience.company_name = companyInfoText[0];
            experience.employment_type = companyInfoText[2];
        }
    }

    // Extracting duration
    const duration = section.querySelector('.pvs-entity__caption-wrapper');
    if (duration) {
        experience.duration = duration.textContent.trim();
    }

    // Extracting location
    const location = section.querySelectorAll('.t-14.t-normal.t-black--light');
    if (location.length > 1) {
        experience.location = location[1].textContent.trim();
    }

    // Extracting skills
    const skills = section.querySelector('.hoverable-link-text');
    if (skills) {
        experience.skills = skills.textContent.trim();
    }
    // console.log(experience , "finel experience data" );
    
    // const finelObjWithCompanyName = {}
    for(let key in experience){
        if(experience[key] === "company_name"){
          console.log(experience[key] , "checking for company name in experience data")
        }
    }

    if (experience.hasOwnProperty('company_name')) {
        // Append this experience to the list of experiences
        experiences.push(experience);
    }
    // Append this experience to the list of experiences
    // experiences.push(experience);
     
    // const experiencesWithCompanyName = experiences.filter(experience => experience.company_name);
    // experiences.push(experiencesWithCompanyName);
});

// console.log(experiences , "checking finel experiences data")
// let experienceContainer = document.getElementById("experienceContainer")
// let pTag = document.createElement("p")
// experiences.forEach((elem)=> console.log(pTag.innerText = `Job_title: ${elem.job_title}`))
// experienceContainer.append(pTag)
// Log the list of experiences

document.getElementById("experience_btn").addEventListener("click", function() {
    var experienceContainer = document.getElementById("experienceContainer");
    experienceContainer.innerHTML = ""; // Clear previous content

   if(experiences.length === 0){
    
    let experienceAlertText = document.createElement("p")
    experienceAlertText.innerText = "experience details unavailable"
    experienceContainer.append(experienceAlertText)

   }else{
    experiences.forEach(function(experience) {
        var experienceDiv = document.createElement("div");
        experienceDiv.classList.add("experience-item");

        if (experience.company_logo_url) {
            var logoImg = document.createElement("img");
            logoImg.src = experience.company_logo_url;
            logoImg.alt = experience.company_name + " Logo";
            experienceDiv.appendChild(logoImg);
        }

        var jobTitle = document.createElement("p");
        jobTitle.textContent = experience.job_title;
        experienceDiv.appendChild(jobTitle);

        var companyName = document.createElement("p");
        companyName.textContent = "Company: " + experience.company_name;
        experienceDiv.appendChild(companyName);

        var employmentType = document.createElement("p");
        employmentType.textContent = "Employment Type: " + experience.employment_type;
        experienceDiv.appendChild(employmentType);

        var duration = document.createElement("p");
        duration.textContent = "Duration: " + experience.duration;
        experienceDiv.appendChild(duration);

        if (experience.location) {
            var location = document.createElement("p");
            location.textContent = "Location: " + experience.location;
            experienceDiv.appendChild(location);
        }

        if (experience.skills) {
            var skills = document.createElement("p");
            skills.textContent = "Skills: " + experience.skills;
            experienceDiv.appendChild(skills);
        }

        experienceContainer.appendChild(experienceDiv);
    });
   }
});


 

                        
//-----------------------------------Experiance data **company names** ------------------------------------------------------------------------//     


//------------------------------------------------------Contact info data extraction--------------------------------------------------------------------------------//

                const elem = tempDiv.querySelector('#top-card-text-details-contact-info')   //correct

                 if (elem) {
                        let href = elem.getAttribute('href');

                        const contactInfoLink = `https://www.linkedin.com${href}`;

                        console.log(contactInfoLink, "here is our finel contat link");

                        // Check if the link exists
                        if (contactInfoLink) {

                            // Event listener for button click
                            document.getElementById('new_contact_btn').addEventListener('click', async () => {
                                await runScraping();
                            });

                            async function runScraping() {
                                try {
                                    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                                        chrome.tabs.sendMessage(tabs[0].id, { text: "getContactInfo", url: contactInfoLink }, function (response) {
                                            if (response && response.html) {
                                                console.log(response.html, "this is the contact page dom")
                                                // let champ = document.getElementById("show_iframe")
                                                // champ.innerHTML = response.html;

                                                const contactInfoDom = response.html
                                                //now extract the info from the dom /////
                                                let finelContactInfoData = parseContactInfo(contactInfoDom)     //calling the information extraction function
                                                // finelContactInfoData  = parseContactInfo(contactInfoDom)
                                                console.log("Contact info response from content.js ", finelContactInfoData);


                    // console.log(finelContactInfoData, "checking scope of the contact")
                    let newData = {
                        name: name,
                        profilePicSrc: profilePicSrc,
                        companyName: companyName,
                        designationAndTechStack: designationAndTechStack,
                        location: location,
                        connections: connections,
                        contactInfo: finelContactInfoData,  
                        experience : experiences,
                        educationDetails : education
                        // email: email
                    };


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
                            }
                                        });
                                    });
                                } catch (error) {
                                    console.error('Error scraping contact info:', error);
                                }
                            }


                        } else {
                            console.log("Contact info link not found.");
                        }

                    } else {
                        console.log("Contact info link not found.");
                    }

 
                } else {
                    let container = document.getElementById("container");
                    container.innerText = "Failed to fetch HTML content";
                }
            });
        });
    });
});



//contact information data extraction function ---------
const parseContactInfo = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    var contactInfo = {};

    const contactSections = doc.querySelectorAll('.pv-contact-info__contact-type');

    // Iterate over each contact section
    contactSections.forEach(section => {
        // Extract the header
        const headerElement = section.querySelector('.pv-contact-info__header');
        const header = headerElement ? headerElement.textContent.trim() : null;

        // Extract the contact information
        let contact = null;

        // Different types of contact sections may have different structures, so we need to handle them separately
        if (header === 'Profile') {
            const profileLinkElement = section.querySelector('.pv-contact-info__ci-container a');
            contact = profileLinkElement ? profileLinkElement.getAttribute('href') : null;
            console.log(contact, "in the contact page<<>>><<>>")
            // document.getElementById("pro_url").innerText = `Profile Url: ${profileLinkElement ? profileLinkElement.getAttribute('href') : null}`
            document.getElementById("pro_url").innerText =  profileLinkElement.getAttribute('href') 

        } else if (header === 'Phone') {
            const phoneElement = section.querySelector('.pv-contact-info__ci-container .t-black.t-normal');
            contact = phoneElement ? phoneElement.textContent.trim() : null;
            document.getElementById("phone_num").innerText = `Contact No: ${contact}`

        } else if (header === 'Email') {
            const emailElement = section.querySelector('.pv-contact-info__ci-container a');
            contact = emailElement ? emailElement.textContent.trim() : null;
            document.getElementById("email_add").innerText = emailElement ? `Email: ${emailElement.textContent.trim()}` : null


        } else if (header === 'Birthday') {

            const birthdayElement = section.querySelector('.pv-contact-info__ci-container .t-black.t-normal');
            contact = birthdayElement ? birthdayElement.textContent.trim() : null;
            document.getElementById("birth_day").innerText = birthdayElement ? `Birth Day: ${birthdayElement.textContent.trim()}` : null;


        } else {
            // For other sections like Birthday, Connected, etc.
            const contactItemElement = section.querySelector('.pv-contact-info__ci-container .t-black.t-normal');
            contact = contactItemElement ? contactItemElement.textContent.trim() : null;

        }

        // Store the extracted information in the contactInfo object
        if (header && contact) {
            contactInfo[header] = contact;
        }
    });



    return contactInfo;
};





// function getEducationDetails(htmlData){
//     console.log(htmlData , "checking for the data in the education section")
//     //---------------------------------Education Details--------------------------------------------------//
                   
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlData, 'text/html');
//     const educationItems = doc.querySelectorAll('li.artdeco-list__item');

//     const educationDetails = [];

//     educationItems.forEach(item => {
//         const titleElement = item.querySelector('span.t-14');
//         const durationElement = item.querySelector('span.t-black--light');
//         const descriptionElement = item.querySelector('div.pv-shared-text-with-see-more');

//         // Check if elements are found before accessing their textContent
//         if (titleElement && durationElement && descriptionElement) {
//             const title = titleElement.textContent.trim();
//             const duration = durationElement.textContent.trim();
//             const description = descriptionElement.textContent.trim();

//             const educationObj = {
//                 title: title,
//                 duration: duration,
//                 description: description
//             };

//             educationDetails.push(educationObj);
//         } else {
//             console.error('Missing element in education item:', item);
//         }
//     });

//     return educationDetails;

// //------------------------------||---Education Details---||-----------------------------------------------//
// }

