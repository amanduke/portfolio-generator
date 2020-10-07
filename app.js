
const inquirer = require('inquirer');
console.log(inquirer)

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));


// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// // const { fstat } = require("fs/promises");

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw err;
    
//     console.log('Portfolio complete! Check out index.html to see the output!!');
// });



// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
    
// };


// console.log('Jane', 'Janehub');
// console.log(generatePage('Jane', 'janehub'));

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));



// const printProfileData = (profileDataArr) => {
//     //This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('===============');

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem)); {
//         console.log(profileItem)
//     };
// };

// printProfileData(profileDataArgs);

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;



// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// console.log('Hi');


// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);

// console.log(sum);