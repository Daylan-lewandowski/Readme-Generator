const inquirer = require('inquirer')
const {writeFile, copyFile} = require

const questions = () => {
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
            name:'Questions',
            message:''
        }
    ])
}
questions()