// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
     return    `

        ${data.name}

     ## Table of Contents
     * [Description](#description)
     * [Installation](#installation)
     * [Usage](#usage)
     * [License](#license)
     * [Contribution](#contribution)
     * [Test](#tests)
     * [Questions?](#questions)  
    
     ## Description
     ${data.Description}
     ## Installation
     ${data.Installation}
     ## Usage
     ${data.Usage}
     ## Contribution
     ${data.Contribution}
     ## Test
     ${data.Test}
     ## Questions?
     
     
     You can Email me at: ${data.Email}
     
     You can contact me on Github at: [${data.username}](https://github.com/${data.username})
   
     `;
 }


// function generateMarkdown(data) {
//   return `# ${data.title}
//   ${name}
//   ${description}
//   ${tableOfContents}
//   ${installation}
//   ${usage}
//   ${license}
//   ${contributors}
//   ${gitHubName}
//   ${email}



// `;
//}

module.exports = generateMarkdown;