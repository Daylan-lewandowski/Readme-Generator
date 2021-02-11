// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util =require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown= require ('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
function promptUser(){
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
        //{
        //     type: 'input',
        //     name: 'Table of Contents',
        //     message:'Please enter a table of contents.',
        //     validate: nameInput => {
        //         if(nameInput) {
        //             return true;
        //         }else {
        //             console.log('Please enter a Table of Contents for your project!');
        //             return false;
        //         }
        //     }
        // },
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
            type:'list',
            name: 'Lisense',
            message:'Which license would you like?',
            choices: ["MIT", "ISC", "Mozilla", "Apache", "GNU"],
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
            name:'username',
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

 async function init() {
     try{ 
        const data =  await promptUser();
        const generateContent = generateMarkdown(data);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log('README created! Success!');
    }
    catch(err) {
        console.log(err);
    }
 }


// Function call to initialize app

// questions()
// .then(writeFile)
// .then(readMeData => {
//     return generateMarkdown(readMeData);
// })
// .then(readMeMd => {
//     return writeFile(readMeMd);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
// })
// .then (copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err => {
//     console.log(err);
//});

// TODO: Create a function to initialize a

init ();