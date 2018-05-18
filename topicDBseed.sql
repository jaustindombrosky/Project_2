DROP DATABASE IF EXISTS topicDB;
CREATE database topicDB;

USE topicDB;

CREATE TABLE fieldofstudy (
  topic VARCHAR(100) NOT NULL,
  PRIMARY KEY (topic)
);


SELECT * FROM fieldofstudy;
