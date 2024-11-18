-- Create the MENU_INFO database
CREATE DATABASE MENU_INFO;

-- Select the database
USE MENU_INFO;

-- Create the orders table first
CREATE TABLE orders (
    orderID INT IDENTITY(1,1), -- Automatically increments the ID
    customerName VARCHAR(255) NOT NULL, -- Name of the customer
    orderDate DATETIME DEFAULT CURRENT_TIMESTAMP, -- Date when the order was placed
    PRIMARY KEY (orderID) -- Unique identifier for each order
);

-- Create the foodContent table
CREATE TABLE foodContent (
    foodContentID INT IDENTITY(1,1), -- Automatically increments the ID
    orderID INT NOT NULL, -- Links to the order this item belongs to
    foodName TEXT NOT NULL, -- Name of the food item
    fDescription TEXT, -- Description of the food item
    price FLOAT NOT NULL, -- Price of the food item
    itemCount INT DEFAULT 1, -- Quantity of the item ordered
    PRIMARY KEY (foodContentID), -- Unique identifier for each item
    FOREIGN KEY (orderID) REFERENCES orders(orderID) ON DELETE CASCADE -- Links to the orders table
);
