const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mainMenu = require('./lib/mainMenu.js');
const addDepartment = require('./lib/add-department.js');
const addRole = require('./lib/add-role.js');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Dollarbi11$',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee-tracker database!')
);


const viewAllEmployees = function() {
    db.execute(
        `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id ORDER BY employee.id;`,
        function(err, results) {
            if (err) { console.log(err); return; };

            let tableArray = [];
            for (i =0; i< results.length; i++) {
                let tableObj = {
                    ID: `${results[i].id}`,
                    Name: `${results[i].first_name}` + ` ${results[i].last_name}`,
                    Job_Title: `${results[i].title}`,
                    Salary: `${results[i].salary}`,
                    Manager_ID: `${results[i].manager_id}`
                };

                tableArray.push(tableObj);
            };
            let table = cTable.getTable(tableArray);

            console.log(table);
            transitionFunc();
        }
    )
};


const viewAllDepartments = function() {
    db.execute(
        "SELECT * FROM `department`",
        function(err, results) {
            if (err) {
                console.log(err);
                return;
            }

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

            
            transitionFunc();
        });
};


const viewAllRoles = function() {
    db.execute(
        "SELECT role.id, role.title, role.salary, role.department_id, department.name FROM role INNER JOIN department ON role.department_id = department.id",
        function(err, results) {
            if (err) {
                console.log(err);
                return;
            }

            let tableArray = [];
            for (i = 0; i < results.length; i++) {
                let tableObj = {
                  Title: `${results[i].title}`,
                  Department: `${results[i].name}`,
                  ID: `${results[i].id}`,
                  Salary: `${results[i].salary}`   
                };

                tableArray.push(tableObj);
            }
            let table = cTable.getTable(tableArray);
            console.log(table);

            transitionFunc();
        }
    )
};

const transitionFunc = function() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'transition',
        message: 'To return to the Main Menu, press "Enter".'
    }]).then(answers => {
        if (answers) {mainMenuFunc();};
    });
};


const addDepartmentFunc = function() {
    inquirer.prompt(addDepartment).then(answers => {
        let name = answers.name;
        db.execute(
            `INSERT INTO department (name) VALUES (?);`,
            [`${name}`],
            function (err, results) {
                if (err) throw err;
                console.log(results);
            }
        );


        console.log(`Department successfully added to database!`);
        transitionFunc;
    })
};


const addRoleFunc = function() {
    inquirer.prompt(addRole).then(answers => {
        let name = answers.name;
        let salary = answers.salary;
        let department_id = answers.department_id;

        db.execute(
            `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`,
            [`${name}`, salary, department_id],
            function (err, results) {
                if (err) throw err;
                console.log(results);
            }
        );


        console.log('Role successfully added!');
        transitionFunc();
    })
};


const mainMenuFunc = function() {
    inquirer
    .prompt(mainMenu).then(answer => {
        if (answer.mainMenu === "View All Departments") {
            console.log("All Departments");
            viewAllDepartments();
        }

        if (answer.mainMenu === "View All Roles") {
            viewAllRoles();
        }

        if (answer.mainMenu === "View All Employees") {
            viewAllEmployees();
        }

        if (answer.mainMenu === "Add a Department") {
            addDepartmentFunc();
        }

        if (answer.mainMenu === "Add a Role") {
            addRoleFunc();
        }
    });
};


const init = function() {
    console.log(`Welcome to the Command Line Employee Tracker!`);
    mainMenuFunc();
};




init();