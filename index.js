///listing modules 
const inquirer = require('inquirer');
const fs = require('fs');

///generate user input questions for README 
inquirer.prompt(
    [
        {
            type: 'input',
            message:"What is the title of the project?",
            name:'Title',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message:"What is the description of the project?",
            name:'Description',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message:"Please list the installation steps for your project.",
            name:'Installation',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message:"Please enter the usage information for your project.",
            name:'Usage',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message:"Please enter the contributing guidelines for your project.",
            name:'Contributing',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message:"Please enter the test instructions for your project.",
            name:'Testing',
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {   
            type: 'list',
            message:"What license did you use for your project?",
            name:'License',
            choices: ['MIT License', 'GNU GPLv3', 'Apache License','Unilicense', 'None'],
            ///Validating user input, requiring an input from user 
            validate: (value) =>{ if(value){return true} else 
            {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github Username',
            name: 'Github',
            alidate: (value) =>{ if(value){return true} else 
            {return 'Please enter a value to continue'}}, 
        },
        {
            type: 'input',
            message: 'Email Address',
            name: 'Email',
            alidate: (value) =>{ if(value){return true} else 
            {return 'Please enter a value to continue'}}, 
        }

    ]
).then(({
    Title,
    Description,
    Installation,
    Usage,
    License,
    Contributing,
    Testing,
    Github,
    Email
})=>{
const template = `# ${Title}

# Table of Contents

* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [License] (#License)
* [Contributing] (#Contributing)
* [Testing] (#Testing)
* [Questions]

# Description
${Description}
## Installation
${Installation}
## Usage
${Usage}
## License 
${License}
## Contributing 
${Contributing}
## Testing 
${Testing}

# Questions 
* Github:${Github}
* Email:${Email}`;

createNewFile(Title,template);
}
);

function createNewFile(fileName,data){
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README is generated.');

})
}



