DROP DATABASE IF EXISTS stack_scholarDB;
CREATE database stack_scholarDB;

USE stack_scholarDB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    affiliation VARCHAR(100),
    rating DECIMAL (1,1),
    contributions INT, 
    passwd VARCHAR(100), 
    username VARCHAR(100)
);

CREATE TABLE topics_a (
    topics_a_id INT AUTO_INCREMENT PRIMARY KEY,
    topics VARCHAR(100)
);   

CREATE TABLE topics_b (
 	id INT AUTO_INCREMENT PRIMARY KEY,
    topics_b_id INT,
    topics_b VARCHAR(100),
    FOREIGN KEY(topics_b_id) REFERENCES topics_a (topic_a_id)
);   

CREATE TABLE topics_c (
	id INT AUTO_INCREMENT PRIMARY KEY,
  	topics_c_id INT,
    topics_c VARCHAR(100),
    FOREIGN KEY(topics_c_id) REFERENCES topics_b (topics_b_id)
);

SELECT * FROM ;
