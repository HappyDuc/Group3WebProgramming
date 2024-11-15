-- Create the MENU_INFO database
CREATE DATABASE MENU_INFO;

-- Select the database
USE MENU_INFO;

-- Create the basket table
CREATE TABLE basket (
    orderID INT IDENTITY(1,1), --Should automatically increment each ID by 1
    Totalprice FLOAT NOT NULL,
    PRIMARY KEY (orderID)
);

-- Create the foodContent table (assuming it doesn't exist yet)
CREATE TABLE foodContent (
    foodID INT IDENTITY(1,1), --Should automatically increment each ID by 1
    foodName TEXT NOT NULL,
    fDescription TEXT,
    price FLOAT NOT NULL,
    orderID INT,
    PRIMARY KEY (foodID),
    FOREIGN KEY (orderID) REFERENCES basket(orderID)
);


