const inquirer = require("inquirer");

const promptUser = () => {
    return inquirer.prompt([
    //Add in a title 
        {
            type: 'input',
            name: 'title',
            message:'What is the title of your project?'
        },
    ])
}

const promptReadMe = (readMeData) => {
    console.log(`
    ===================
    Add in ReadME Info!
    ===================
    `)

    if(!readMeData.projects) {
        readMeData.projects = [];
    }
    //Add in description, installation instructions, usage information, contribution guidelines, and test instructions
    return inquirer
    .prompt([
        {
            type: "input",
            name: "description",
            message: "Input a description of your application! (REQ)",
            validate: (descriptionInfo) => {
              if (descriptionInfo) {
                return true;
              } else {
                console.log("Please enter a description for you app!");
                return false;
              }
            },
          },
          {
              type:'input',
              name:'installation',
              message:'Add in an installation guide!',
              validate: (installaionInput) => {
                if (installaionInput){
                    return true;
                } else{
                    console.log('Please enter in steps for intallation :)')
                    return false;
                } 
              },
          },
          {
            type:'input',
            name:'usage',
            message:'Describe how people can use your app!',
            validate: (usageInput) => {
              if (usageInput){
                  return true;
              } else{
                  console.log('Please describe how people can use your app')
                  return false;
              } 
            },
          },
          {
            type:'input',
            name:'contribution',
            message:'Describe how people can contribute!',
            validate: (contributionInput) => {
              if (contributionInput){
                  return true;
              } else{
                  console.log('Please enter in how people can contribute to the app :0')
                  return false;
              } 
            },
          },
          {
            type:'input',
            name:'test',
            message:'Please provide how to test the app!',
            validate: (testInput) => {
              if (testInput){
                  return true;
              } else{
                  console.log('Please enter in how people can test the app ;]')
                  return false;
              } 
            },
          },
          {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT License",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"
            ],
        },
        {

            type: "input",
            message: "Enter your GitHub Username:",
            name: "github",
            validate: (gitInput) => {
                if (gitInput){
                    return true;
                } else{
                    console.log('Please enter in how people can test the app ;]')
                    return false;
                } 
              },
            

        },
        {

            type: "input",
            message: "Enter your email address:",
            name: "email",
            validate: (emailInput) => {
                if (emailInput){
                    return true;
                } else{
                    console.log('Please enter in how people can test the app ;]')
                    return false;
                } 
              },

        },
    ]).then((projectData) => {
        readMeData.projects.push(projectData);
        if (projectData) {
          return readMeData;
        }
      });
    
}


module.exports =  {promptUser, promptReadMe} ;