CREATE DATABASE MENU_INFO;

CREATE TABLE orderTable (
    orderID Int,
    Ingredience boolean,
    FoodType Text,
    foodID int,
    PRIMARY KEY (orderID),
    FOREIGN KEY (foodID) REFERENCES foodContents(foodID)
);

CREATE TABLE ingredience (
    ingredienceID int,
    foodID int,
    PRIMARY KEY (ingredienceID),
    FOREIGN KEY (foodID) REFERENCES foodContents(foodID)
);

CREATE TABLE foodContents (
    foodID int,
    alergen boolean,
    PRIMARY KEY(foodID)
);