DROP DATABASE stacks_db;

CREATE DATABASE stacks_db;
USE stacks_db;

CREATE TABLE stacks
(
	id int NOT NULL AUTO_INCREMENT,
	stack_name varchar(9999) NOT NULL,
	date TIMESTAMP DEFAULT now(),
	PRIMARY KEY (id)
);