-- Create the MENU_INFO database
--This File does nothing its just for storing our code for when we need to submit it.
CREATE DATABASE MENU_INFO;

-- Select the database
USE MENU_INFO;

-- Create the foodContent table (assuming it doesn't exist yet)
CREATE TABLE foodContent (
    orderID INT IDENTITY(1,1), --Should automatically increment each ID by 1
    foodName TEXT NOT NULL,
    fDescription TEXT,
    price FLOAT NOT NULL,
    orderID INT,
    itemCount int DEFAULT 1,
    PRIMARY KEY (orderID),
);



