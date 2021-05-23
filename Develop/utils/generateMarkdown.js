// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  let renderLink;
  let renderBadge;
  let color;

  switch (license) {
    case "apache-2.0":
      renderLink = "apache-2.0";
      renderBadge = "Apache%202.0";
      color = "blue";
      break;
    case "bsd-3-clause":
      renderLink = "bsd-3-clause";
      renderBadge = "BSD%203--Clause";
      color = "blue";
      break;
    case "bsd-2-clause":
      renderLink = "bsd-2-clause";
      renderBadge = "BSD%202--Clause";
      color = "orange";
      break;
    case "epl-1.0":
      renderLink = "epl-1.0";
      renderBadge = "EPL%201.0";
      color = "red";
      break;
    case "ipl-1.0":
      renderLink = "ipl-1.0";
      renderBadge = "IPL%201.0";
      color = "blue";
      break;
    case "isc":
      renderLink = "isc";
      renderBadge = "ISC";
      color = "blue";
      break;
    case "mit":
      renderBadge = "MIT";
      renderLink = "mit";
      color = "yellow";
      break;
    case "mpl-2.0":
      renderLink = "mpl-2.0";
      renderBadge = "MPL%202.0";
      color = "brightgreen";
      break;
    case "artistic-2.0":
      renderLink = "artistic-2.0";
      renderBadge = "Artistic%202.0";
      color = "0298c3";
      break;
    case "ofl-1.1":
      renderLink = "ofl-1.1";
      renderBadge = "OFL%201.1";
      color = "lightgreen";
      break;
    case "unlicnese":
      renderLink = "unlicnese";
      renderBadge = "Unlicense";
      color = "blue";
      break;
    case "zlib":
      renderLink = "zlib";
      renderBadge = "Zlib";
      color = "lightgrey";
      break;
  }
  return `[![License](https://img.shields.io/badge/License-${renderBadge}-${color}.svg)](https://opensource.org/licenses/${renderLink})
  `;
}

// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let renderLink;

//   switch (license) {
//     case "apache-2.0":
//       break;
//     case "bsd-3-clause":
//       break;
//     case "bsd-2-clause":
//       break;
//     case "epl-1.0":
//       break;
//     case "ipl-1.0":
//       break;
//     case "isc":
//       break;
//     case "mit":
//       break;
//     case "mpl-2.0":
//       break;
//     case "artistic-2.0":
//       break;
//     case "ofl-1.1":
//       break;
//     case "unlicnese":
//       break;
//     case "zlib":
//       break;
//   }
//   return `https://opensource.org/licenses/${renderLink}`;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  <h1>${data.title}</h1>

  ${renderLicense(data.license)}

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
  The license used is "${data.license}"<br>
  Click the license button at the top to learn more about your license. 
  <br>



  ## Contribution
  ${data.contribution}

  ## Tests
  To run tests, run the following command:
  <p style="background-color:rgb(20, 20, 20); padding:1em">
  ${data.test}
  </p>

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at https://github.com/${data.github}

  `;
}

module.exports = generateMarkdown;
