// Assuming you have an Express.js server
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'cy2025',
    password: 'sbym?8YUCSBx6Q',
    database: 'MENU_INFO',
    port: 3000
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Successfully connected to the database');
});

// Serve the static HTML page
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Route to handle the order ID lookup
app.get('/lookupOrder', (req, res) => {
    const orderID = req.query.orderID;  // Get orderID from query string

    // Query the database
    const query = `
        SELECT b.orderID, b.Totalprice, f.foodName, f.fDescription, f.price 
        FROM basket b
        JOIN foodContent f ON b.orderID = f.orderID
        WHERE b.orderID = ?
    `;

    connection.query(query, [orderID], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err.stack);
            res.status(500).send('Database query error');
            return;
        }

        if (results.length > 0) {
            res.json(results); // Return data to the frontend
        } else {
            res.json({ message: 'Order not found' }); // Return message if no results found
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
