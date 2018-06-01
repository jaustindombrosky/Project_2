DROP DATABASE IF EXISTS fileuploaddb;
CREATE database fileuploaddb;

USE fileuploaddb;

CREATE TABLE files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(100),
    category_one VARCHAR(100),
    sub_categroy VARCHAR(100),
    institution VARCHAR(100),
    user_id VARCHAR(100),
    user_name VARCHAR(100),
    user_email VARCHAR(100),
);
SELECT * FROM files;