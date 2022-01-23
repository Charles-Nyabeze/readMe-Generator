// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const generatePage  = require("./src/page-template.js");
const { writeFile } = require("./utils/generate-read.js");
const { promptUser, promptReadMe } = require("./src/querys.js")


promptUser()
  .then(promptReadMe)
  .then(readMeData => {
    return generatePage(readMeData);
  })
  .then(readMeMarkdown => {
    return writeFile(readMeMarkdown);
  })
  .catch((err) => {
    console.log(err);
  });

//
// ToDo
// Create file (fs) - ReadME
//
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//ToDo
// Find out how to add in licenses
//
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//ToDo
// Add in <src = .....>
//
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//ToDo
// Add in <a href=""><a>
//
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
//ToDo
//No idea heehhe