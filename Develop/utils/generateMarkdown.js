// `Title: ${data.title}` // when i uncommecnt this out i get an error that data is not defined
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
function generateMarkdown(data) {
  return `
   <h1>${data.title}</h1>

  ## Description
  ${data.description}

  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Test](#test)
  * [Questions](#questions)


  ## Installation
  To install the necessary dependencies, run the following command:
  <p style="background-color:rgb(20, 20, 20); padding:1em">
  ${data.installation}
  </p>

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  [![License](https://img.shields.io/badge/License-%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

  ## Contribution
  ${data.contribution}

  ## Tests
  To run tests, run the following command:
  <p style="background-color:rgb(20, 20, 20); padding:1em">
  ${data.test}
  </p>

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.github}.
  ${data.questions}
  `;
}

module.exports = generateMarkdown;
// `Title: ${data.title}` // when i uncommecnt this out i get an error that data is not defined
