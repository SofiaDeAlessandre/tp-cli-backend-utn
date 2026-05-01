CREATE DATABASE cli_crud;

USE cli_crud;

CREATE TABLE users (
  id VARCHAR(100) PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);