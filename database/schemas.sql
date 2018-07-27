DROP DATABASE IF EXISTS foodApp;

CREATE DATABASE foodApp;

USE foodApp;

CREATE TABLE recipe (
  id int NOT NULL AUTO_INCREMENT,
  image varchar(350) NOT NULL,
  label varchar(350) NOT NULL,
  dietLabel varchar(350) NOT NULL,
  calories int NOT NULL,
  comment varchar(350) NULL,
  PRIMARY KEY (ID)
);
