// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
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
        message: 'Please describe what the project does and how to use it.'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for this project.',
        //consult https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
        choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
