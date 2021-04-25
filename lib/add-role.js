const addRole = [
    // prompt for name, salary, and department id
    {
        type: 'input',
        name: 'name',
        message: 'What is the title of the new role?'
    },
    {
        type: 'number',
        name: 'salary',
        message: 'Enter the salary for the new role: '
    },
    {
        type: 'number',
        name: 'department_id',
        message: 'Enter the department ID number: '
    }
];


module.exports = addRole;