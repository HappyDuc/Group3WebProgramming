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

-- Use the MENU_INFO database This is for inserting data
USE MENU_INFO;

-- Insert two orders into the orders table
INSERT INTO orders (customerName, orderDate) VALUES
('John Doe', '2024-11-17 10:00:00'),
('Jane Smith', '2024-11-17 11:00:00');

-- Insert items for John's order (orderID = 1)
INSERT INTO foodContent (orderID, foodName, fDescription, price, itemCount) VALUES
(1, 'Burrito', 'Chicken, Cheese, Salsa', 9.95, 2), -- John ordered 2 burritos
(1, 'Taco', 'Beef, Lettuce, Salsa', 3.95, 3); -- John ordered 3 tacos

-- Insert items for Jane's order (orderID = 2)
INSERT INTO foodContent (orderID, foodName, fDescription, price, itemCount) VALUES
(2, 'Salad', 'Caesar Salad with Chicken', 7.95, 1), -- Jane ordered 1 salad
(2, 'Pasta', 'Alfredo Sauce with Mushrooms', 8.95, 2); -- Jane ordered 2 pastas
