const addEmployee = [
    // prompt for first name, last name, role id, manager id
    {
        type: 'input',
        name: 'first_name',
        message: 'Employee First Name: '
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Employee Last Name: '
    },
    {
        type: 'number',
        name: 'role_id',
        message: 'Employee Role ID: '
    },
    {
        type: 'number',
        name: 'manager_id',
        message: 'Manager ID Number: '
    }
];


module.exports = addEmployee;