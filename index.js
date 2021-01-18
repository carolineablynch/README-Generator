///listing modules 
const inquirer = require('inquirer');
const fs = require('fs');

///generate user input questions for README 
inquirer.prompt(
    [
        {
            type: 'input',
            message="What is the title of the project?",
            name:'Title',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message="What is the description of the project?",
            name:'Description',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message="Please list the installation steps for your project.",
            name:'Installation',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message="Please enter the usage information for your project.",
            name:'Usage',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message="Please enter the contributing guidelines for your project.",
            name:'Contributing',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message="Please enter the test instructions for your project.",
            name:'Testing',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        }   
    ]
)