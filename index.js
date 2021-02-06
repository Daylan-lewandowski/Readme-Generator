// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const {writeFile, copyFile}= require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter a name for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please provide a description of your project.',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message:'Please enter a table of contents.',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter a Table of Contents for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please provide installation instructions for your application.',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What purpose does this application serve?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter the purpose for your project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name: 'Lisense',
            message:'Which license would you like?',
            choices: ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',],
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please choose a license for your project!');
                    return false;
                }
            }
        },
        {
           type:'input',
           name:'Contributors',
           message:'Who contributed to this project?',
           validate: nameInput => {
               if(nameInput) {
                   return true;
               }else {
                   console.log('Please enter contributors for this application!');
                   return false;
               }
           } 
        },
        {
            type:'input',
            name:'Test',
            message:'Please provide test instructions for your application.',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'GitHub username',
            message:'What is your GitHub username?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'Email',
            message:'What is your email address?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
    ])
}

// TODO: Create a function to write README file
const generateMarkdown = (name, github) => {
    return 
    `
    # name
        ${name}
    ## Description
        ${description}
    ## Table of Contents
        ${tableOfContents}
    ## Installation
        ${installation}
    ## Usage
        ${usage}
    ## License

    ## Contributing

    ## Tests
    
    ## Questions

    `;
};
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
questions()
.then(writeFile)