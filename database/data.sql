-- Create the MENU_INFO database
CREATE DATABASE MENU_INFO;

-- Select the database
USE MENU_INFO;

-- Create the foodContent table (assuming it doesn't exist yet)
CREATE TABLE foodContent (
    foodID INT,
    foodName TEXT NOT NULL,
    fDescription TEXT,
    price FLOAT NOT NULL,
    PRIMARY KEY (foodID)
);

-- Create the payment table
CREATE TABLE payment (
    orderID INT,
    price FLOAT NOT NULL,
    foodType TEXT,
    foodID INT,
    PRIMARY KEY (orderID),
    FOREIGN KEY (foodID) REFERENCES foodContent(foodID)
);

