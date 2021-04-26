# MySQL Employee Tracker
![GitHub license](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Description

This application is a basic employee tracking tool that uses the command line to keep track of company roles, departments, as well as individual employees. It stores the information in a database using MySQL to create and store information relevant to the employees and managers in a company. 

To view a quick video walkthrough of the application look, visit https://drive.google.com/file/d/1x3Ntg6hdrPuybVJMwYnACq7cKRHIEM18/view. 

## Installation

This project requires Node.js and MySQL to run correctly. 

To download Node.js visit their website at https://nodejs.org/en/download/. 

To download MySQL, visit their website and follow the directions at https://mysql.com/downloads/. 

Once you have these applications installed open your Git Bash terminal in the location you would like to store the project. Enter the following command to start installing the project:  

```
git clone git@github.com:mrarcher2000/sql-employee-tracker.git
```

Open the project in your command line and type 'npm i' to install the necessary modules for the package. After you install the modules, you will need to generate the databases onto your computer. Start the MySQL terminal by using the command 'mysql -u root -p' and enter your password if you have one. (NOTE: If you have a password, you will need to edit the server.js file and change the "password" object to your local MySQL password) Then type 'SOURCE db/db.sql;' and press enter. You should see success messages showing you did it correctly. Now, type 'SOURCE db/schema.sql;' and press enter. Again, you should see messages saying rows were changed, which means the prompt was a success. Now you are ready to use the application! Type 'quit' to exit the MySQL terminal.

## Usage

To start the application, type 'node server.js' in the command line terminal that the application is stored. You will see a list of options which you can scroll through using the arrow keys. To add or update things in your database, use the appropriate option on the Main Menu and follow the prompts. To exit at any time, press [CTRL] + [C].

## Contributing

This project was made in partnership with the University of Arizona Coding Bootcamp. This project is still in early development and any contribution is welcome. To contribute send an email to the owner of the repository (myself, Archer Nicholson) using the contact info below and leave your name, GitHub username, and your contact information to request a collaboration. 

## Questions

For any additional questions or comments, please email the author of this project at: 
archernich@gmail.com.

*OR*

You can view other repositories made by me at https://github.com/mrarcher2000.



## License
    
This project is licensed under the Open Source MIT License.
A full overview of what this license covers can be found at https://spdx.org/licenses/MIT.html.
    
