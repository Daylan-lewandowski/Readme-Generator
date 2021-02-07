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

     <h1 align="center">${data.name}</h1>

     ## Table of Contents
     * [Description](#description)
     * [Installation](#installation)
     * [Usage](#usage)
     * [License](#license)
     * [Contribution](#contribution)
     * [Test](#tests)
     * [Questions?](#questions)  
    
     ## Description
     ${data.description}
     ## Installation
     ${data.installation}
     ## Usage
     ${data.usage}
     ## Contribution
     ${data.contribution}
     ## Test
     ${data.tests}
     ## Questions?
     ${data.questions}
     <br/>
     You can Email me at: ${data.email}
     <br/>
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