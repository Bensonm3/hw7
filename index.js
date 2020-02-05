const inquirer = require('inquirer');
const fetch = require("node-fetch");
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your favorite color?',
            name: "color"
        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'UserName'

        },
    ]).then( async (responses) =>{
        const APIcall = await fetch(`https://api.github.com/users/${responses.UserName}`);
        if (APIcall.status >= 400) {
            console.log("Bad response from server, try searching again");
          }
        const data = await APIcall.json();
        console.log(data);

});


//  function writeToFile('profile.pdf', data) 
 
// }

// function init() {
// }
// init();
