///listing modules 
const inquirer = require('inquirer');
const fs = require('fs');

///generate user input questions for README 
inquirer.prompt(
    [
        {
            type: 'input',
            message="What is the title of the project?"
            name:'title';
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },



        
    ]

}