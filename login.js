
CREATE TABLE `mydatabase`.`members` (

`id` INT(11) NOT NULL AUTO_INCREMENT ,
`username` VARCHAR(30) NOT NULL ,
`email` VARCHAR(50) NOT NULL ,
`password` VARCHAR(128) NOT NULL ,
PRIMARY KEY (`id`) ,

UNIQUE KEY `username` (`username`)

) ENGINE = MYISAM DEFAULT CHARSET = utf8;



INSERT INTO `members`(`username`, `email`, `password`) 
    VALUES ('myuser','myemail@domain.com','mypassword');






