DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);