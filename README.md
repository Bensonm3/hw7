#Developer Profile Generator

User Story:
AS A product manager
I WANT a developer profile generator
SO THAT I can easily prepare reports for stakeholders

Features:
Generate an HTML profile for a Github user by only typing their username
4 different color configurations are offered for their generated profile
a demo gif is also included in the files showing the steps needed to create the document
![alt text](https://github.com/Bensonm3/Developer-Profile-Generator/blob/master/Screen%20Shot%202020-12-15%20at%208.05.25%20PM.png)

Instructions:
Download and open the index.js file
Ensure you have node fetch, inquirer, fs, and html-to-pdf installed in your terminal
code is initialized by typing 'node index' into the terminal
User is prompted to choose between four different color options, which will determine
the color scheme of the profile
User is then prompted to input their github Username
	If the username does not exist, an error message is displayed and the file will not
	be written
	If the username does exist, no error message will display and the results will be
	written to profile.html in the Profile folder.
	This file will then be converted to PDF and a Profile.pdf file will be produced in the
	Profile folder.

Technologies Used:
Node.js
Javascript
HTML
CSS
node fetch
inquirer
fs
html-to-pdf
Github API


	Known Issue:
	The html version of the profile has a few formatting errors, unfortunately the PDF
	conversion alters the formatting so uniformity is not possible in this version.

	Deployed URL: https://github.com/Bensonm3/hw7
