const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',  // Or the host where MySQL is running
    user: 'root',       // Replace with your MySQL username
    password: '',       // Replace with your MySQL password
    database: 'MENU_INFO'  // Database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Successfully connected to the database');
});
