CREATE DATABASE MENU_INFO;

-- Select the database
USE MENU_INFO;

CREATE TABLE payment (
    orderID INT,
    price FLOAT,
    FoodType TEXT,
    foodID INT,
    PRIMARY KEY (orderID),
    FOREIGN KEY (foodID) REFERENCES foodContent(foodID)
);

CREATE TABLE foodContent (
    foodID INT,
    foodType TEXT,
    allergen BOOLEAN,
    orderID INT,
    PRIMARY KEY (foodID),
    FOREIGN KEY (orderID) REFERENCES payment(orderID)
);
