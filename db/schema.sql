/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database burger_db and specified it for use.
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
PRIMARY KEY (id)
);

--Insert a set of records.


-- INSERT INTO wishes (wish) VALUES ('Shaan wants to read minds.');
-- INSERT INTO wishes (wish) VALUES ('John wins the lottery.');
-- INSERT INTO wishes (wish) VALUES ('Kelly wishes for a room full of kittens.');
