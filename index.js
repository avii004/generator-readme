// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const emailValidator = require('email-validator');
const generateMarkdown = require('./utils/generateMarkdown');

// Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Name your project',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Chose a repository name',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your repository name.' }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What do you want your project description to be?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter description.' }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your instructions for installation',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your installation instructions.' }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter usage information.' }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your contribution guidelines.' }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your test instructions.' }
        }
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'ISC', 'GNU GPLv3'],
        validate: (value) => {
            if (value) { return true } else { return 'Please select a license.' }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else { return 'Please enter a valid email address.' }
        }
    }
];

// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

// Creates a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then( (data) => {
            writeToFile('README.md', generateMarkdown(data));
        })
}

// Function call to initialize app
init();
