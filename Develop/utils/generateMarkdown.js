// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
  // var l = generateMarkdown();
  // console.log("This is from license");
  // console.log(l);
  // console.log("This is from license");
}

// renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let renderLink;

  switch (license) {
    case "apache-2.0":
      renderLink = "apache-2.0";
      break;
    case "bsd-3-clause":
      renderLink = "bsd-3-clause";
      break;
    case "bsd-2-clause":
      renderLink = "bsd-2-clause";
      break;
    case "epl-1.0":
      renderLink = "epl-1.0";
      break;
    case "ipl-1.0":
      renderLink = "ipl-1.0";
      break;
    case "isc":
      renderLink = "isc";
      break;
    case "mit":
      renderLink = "mit";
      break;
    case "mpl-2.0":
      renderLink = "mpl-2.0";
      break;
    case "artistic-2.0":
      renderLink = "artistic-2.0";
      break;
    case "ofl-1.1":
      renderLink = "ofl-1.1";
      break;
    case "unlicnese":
      renderLink = "unlicnese";
      break;
    case "zlib":
      renderLink = "zlib";
      break;
  }

  // if ((license = "bsd-2-clause")) {
  //   renderLink = "bsd-2-clause";
  // }
  // if ((license = "epl-1.0")) {
  //   renderLink = "epl-1.0";
  // }
  // if ((license = "ipl-1.0")) {
  //   renderLink = "ipl-1.0";
  // }
  // if ((license = "isc")) {
  //   renderLink = "isc";
  // }
  // if ((license = "mit")) {
  //   renderLink = "mit";
  // }
  // if ((license = "mpl-2.0")) {
  //   renderLink = "mpl-2.0";
  // }
  // if ((license = "artistic-2.0")) {
  //   renderLink = "artistic-2.0";
  // }
  // if ((license = "ofl-1.1")) {
  //   renderLink = "ofl-1.1";
  // }
  // if ((license = "unlicnese")) {
  //   renderLink = "unlicnese";
  // }
  // if ((license = "zlib")) {
  //   renderLink = "zlib";
  // }
  return `https://opensource.org/licenses/${renderLink}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // var lic =  `${data.license}`;

  return `
  <h1>${data.title}</h1>

  ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)

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
  License used "${data.license}"<br>
  Click here to learn about your licencse <br>
  ${renderLicenseLink(data.license)}

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
  }. You can find more of my work at https://github.com/${data.github}.
  ${data.questions}

  `;
}

module.exports = generateMarkdown;
