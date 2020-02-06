const inquirer = require('inquirer');
const fetch = require("node-fetch");
const fs = require('fs');
const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };
inquirer.prompt(
    [
        {
            type: 'rawlist',
            message: 'Choose your favorite color',
            choices: ['green', 'blue', 'pink', 'red'],
            name: "color"

        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'UserName'

        },
    ]).then( async (responses) =>{
        const STARcall = await fetch(`https://api.github.com/users/${responses.UserName}/starred`);
        const APIcall = await fetch(`https://api.github.com/users/${responses.UserName}`);
        if (APIcall.status >= 400) {
            console.log("Error writing file, try searching again");
          }
        const stardata = await STARcall.json(); 
        const data = await APIcall.json();
        let locationURL = 'https://www.google.com/maps/place/'+data.location;
        
        
        
        let style =
        `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Profile</title>
        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: ${colors[responses.color].wrapperBackground};
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }
           main {
           background-color: #E9EDEE;
           height: auto;
           padding-top: 30px;
           }
           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           margin-top: 45px;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[responses.color].headerBackground};
           color: ${colors[responses.color].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[responses.color].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 50px;
             margin-bottom: 20px;
             padding-top: 40px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[responses.color].headerBackground};
             color: ${colors[responses.color].headerColor};
             margin: 20px;
             text-align: center;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>`;









        let wrapper = "<div class='wrapper'>";
        let end = "</div>"
        let mainstart = "<div class='main'>";
        let card = "<div class = 'card'>"
        let photoheader = "<div class='photo-header'>";
        let image = "<div class ='img'><img src='"+data.avatar_url+"'></img></div>";
        let hi = "<h1>Hi!</h1>";
        let pname = "<h2 class='a'>My name is "+data.name+"</h2>";
        let pcompany = "<h3 class='a'>Currently at "+data.company+"</h3>";
        let linkboxstart = "<div class=links-nav'>";
        let plocation = "<a class ='nav-link fas fa-location-arrow' href="+locationURL+"> "+data.location+"</a>";
        let pprofile = "   <a class ='nav-link fab fa-github-alt' href="+data.html_url+"> Github Profile</a>";
        let pblog = "   <a class ='nav-link fas fa-rss' href="+data.blog+"> Blog</a>";
        let bio = "<h2>"+data.bio+"</h2>";
        let row = "<div class='row'>";
        let col = "<div class='col'>";
        let repos = "<h3>Public Repositories <br>"+data.public_repos+"</h3>";
        let followers = "<h3> Followers <br>"+data.followers+"</h3>";
        let following = "<h3> Following <br>"+data.following+"</h3>";
        let starred = "<h3> Github Stars <br>"+stardata.length+"</h3>";
        
        let profile = style+wrapper+mainstart+card+photoheader+image+end+hi+pname+pcompany+linkboxstart+plocation+pprofile+pblog+end+end+row+bio+end+row+col+card+repos+end+card+starred+end+end+col+card+followers+end+card+following+end+end+wrapper+end+end+
        end+end;

          fs.writeFile('profile.html', profile, function(err){
            if(err){
                return console.log(err);
            }
              console.log("Response written to profile.html");
          }
        )
});


//   function writeToFile(filename, data) {
 
//  }

//  function init() {

// init();
