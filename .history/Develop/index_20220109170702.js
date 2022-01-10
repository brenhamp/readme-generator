// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
function questions () {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },

    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your GitHub repository?',
    },

    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project in a few words or short sentences.'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Explain what, if anything, the user needs to install in order for your project to function. (optional)'
    },

    {
        type: 'input',
        name: 'usage',
        message: "Please provide instructions for your project's use along with examples, if desired."
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles, if desired. (optional)'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project.',
        //consult https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0','postgresq1', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Please describe how users can contribute to your project. (optional)'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'If you have tests for users to run, please enter them here and explain how to use them. (optional)'
    }
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your new README has been created!')
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: " + userResponses);
        console.log("User input received. Awaiting GitHub response...");
        
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub info: " + userInfo);
        console.log("Generating README...");
        const generateReadme = generateMarkdown(userResponses, userInfo);
        console.log(generateReadme);

        await writeToFile('new_README.md', generateReadme);
    }
    catch (err) { 
        console.log(err);
    }

};

// Function call to initialize app
init();
