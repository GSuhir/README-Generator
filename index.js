// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the TITLE of your new project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a DESCRIPTION of your new project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter the instructions for INSTALLATION:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the USAGE information:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a LICENSE for your application:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter the CONTRIBUTION guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the TEST instructions:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

// Function to generate the README content
function generateMarkdown(data) {
    
    const readmeTemplate = `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This application is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, you can reach me through:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  
    return readmeTemplate;
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`README.md is ready!`);
    }
  });
}


// TODO: Create a function to initialize app
function init() {
    
  inquirer
  .prompt(questions)
  .then((data) => {
    const readMeContent = generateMarkdown(data);
    writeToFile('README.md', readMeContent);
  })
  .catch((err) => {
    console.log(err);
  });
}


// Function call to initialize app
init();
