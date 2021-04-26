const updateEmployeeRole = [
    // prompt for employee id and the new role id

    {
        type: 'number',
        name: 'employee_id',
        message: 'Enter the Employee ID number: '
    },
    {
        type: 'number',
        name: 'role_id',
        message: `Enter the ID # of the Employee's new role`
    }
];

module.exports = updateEmployeeRole;