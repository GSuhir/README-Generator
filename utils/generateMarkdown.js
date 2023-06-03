// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3-0/)',
  }

  if (badges.hasOwnProperty(license)) {
    return licenseBadges[license];
  }
  return "";

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
}

const links = {
  MIT: 'https://opensource.org/licenses/MIT',
  Apache: 'https://opensource.org/licenses/Apache-2.0',
  GPL: 'https://opensource.org/license/gpl-3-0/',
};

if (links.hasOwnProperty(license)) {
  return licenseLinks[license];
}
return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
}

const licenseSections = {
  MIT: 'This application is covered under the [MIT License](https://opensource.org/licenses/MIT).',
  Apache: 'This application is covered under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).',
  GPL: 'This application is covered under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).',
};

if (licenseSections.hasOwnProperty(license)) {
  return licenseSections[license]; // Return the license section
}
return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
}
}

module.exports = generateMarkdown, renderLicenseSection, renderLicenseLink, renderLicenseBadge;
