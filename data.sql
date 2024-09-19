CREATE DATABASE MENU_INFO;

CREATE TABLE orderTable (
    orderID Int,
    Ingredience boolean,
    FoodType Text,
    PRIMARY KEY (orderID)
);

CREATE TABLE ingredience (
    ingredienceID int,
    PRIMARY KEY (ingredienceID)
);

CREATE TABLE foodContents (
    foodID int,
    alergen boolean,
    PRIMARY KEY(foodID)
);