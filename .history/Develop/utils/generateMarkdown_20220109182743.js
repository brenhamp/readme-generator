// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let markdownTable = `## Table of Contents`;

  //booleans for optional README elements
  if (userResponses.installation !== '') { markdownTable += `
  * [Installation](#installation)`
  };

  if (userResponses.usage !== '') { markdownTable += `
    * [Usage](#usage)`
  };

  if (userResponses.credits !== '') { markdownTable += `
    * [Credits](#credits)`
  };

  if (userResponses.tests !== '') { markdownTable += `
    * [Tests](#tests)`
  };

  let readMeFrame =
  `# ${userResponses.project}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) 


  ## Description


  ${userResponses.description}
  `
  
  readMeFrame += markdownTable;

  readMeFrame += `
  * [License](#license)`;

  if (userResponses.installation !== '') {
    readMeFrame += `
    
    ## Installation
    

    ${userResponses.installation}`
  };

  if (userResponses.usage !== '') {
    readMeFrame += `
    
    ## Usage
    

    ${userResponses.usage}`
  };

  if (userResponses.credits !== '') {
    readMeFrame += `
    
    ## Credits
    

    ${userResponses.credits}`
  };

  if (userResponses.tests !== '') {
    readMeFrame += `
    
    ## Tests
    

    ${userResponses.tests}`
  };

  readMeFrame += `
  
  ## License
  
  ${userResponses.license}
  `;

  let contactMe = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For questions or comments, contact me:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null) {
  
  contactMe +=
  `
  Email: ${userInfo.email}
  `};

  readMeFrame += contactMe;

  return readMeFrame;


 
;
}

module.exports = generateMarkdown;
