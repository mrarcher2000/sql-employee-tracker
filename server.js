const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// -- EXPRESS MIDDLEWARE -->
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Dollarbi11$',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee-tracker database!')
);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});