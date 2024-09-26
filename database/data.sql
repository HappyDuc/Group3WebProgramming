CREATE DATABASE MENU_INFO;

CREATE TABLE Order (
    orderID Int,
    price float,
    FoodType Text,
    foodID int,
    PRIMARY KEY (orderID),
    FOREIGN KEY (foodID) REFERENCES foodContent(foodID)
);

CREATE TABLE foodContent (
    foodID int,
    foodType Text,
    allergen boolean,
    orderID int,
    PRIMARY KEY(foodID)
    FOREIGN KEY (orderID) REFERENCES Order(orderID)
); 