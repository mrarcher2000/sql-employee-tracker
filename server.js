const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mainMenu = require('./lib/mainMenu.js');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Dollarbi11$',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee-tracker database!')
);


const viewAllDepartments = function() {
    db.execute(
        "SELECT * FROM `department`",
        function(err, results) {
            if (err) {
                console.log(err);
                return;
            }

            console.log(results[0].id);
            let tableArray = [];
            for (i =0; i< results.length; i++) {
                let tableObj = {
                    Name: `${results[i].name}`,
                    ID: `${results[i].id}`
                };

                tableArray.push(tableObj);
            };
            let table = cTable.getTable(tableArray);

            console.log(table);
        });


    mainMenuFunc();
};

const mainMenuFunc = function() {
    inquirer
    .prompt(mainMenu).then(answer => {
        if (answer.mainMenu === "View All Departments") {
            console.log("viewing");
            viewAllDepartments();
        }
    });
};


const init = function() {
    console.log(`Welcome to the Command Line Employee Tracker!`);
    mainMenuFunc();
};




init();