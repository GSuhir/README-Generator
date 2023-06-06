// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/license/gpl-3-0/)',
  }

  if (licenseBadges.hasOwnProperty(license)) {
    return licenseBadges[license];
  }
  return "";

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
}

const licenseLinks = {
  MIT: 'https://opensource.org/licenses/MIT',
  Apache: 'https://opensource.org/licenses/Apache-2.0',
  GPL: 'https://opensource.org/license/gpl-3-0/',
};

if (licenseLinks.hasOwnProperty(license)) {
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
  GPL: 'This application is covered under the [GNU General Public License v3.0](https://opensource.org/license/gpl-3-0).',
};

if (licenseSections.hasOwnProperty(license)) {
  return licenseSections[license]; 
}
return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
}
}

module.exports = {generateMarkdown, renderLicenseSection, renderLicenseLink, renderLicenseBadge};
