// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  let table = `## Table of Contents`;

  //booleans for optional README elements
  if (userResponses.installation !== '') {
    table += `* [Installation] (#installation)`
  };

  if (userResponses.usage !== '') {
    table += `* [Usage] (#usage)`
  };

  if (userResponses.credits !== '') {
    table += `* [Credits] (#credits)`
  };

  if (userResponses.tests !== '') {
    table += `* [Tests] (#tests)`
  };

  let readMeFrame =
  `# ${userResponses.title}
  ## Description
  ${userResponses.description}`
  
  readMeFrame += table;
  readMeFrame += `* [License] (#license)`;

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
  }


  return `# ${data.title}

`;


module.exports = generateMarkdown;
