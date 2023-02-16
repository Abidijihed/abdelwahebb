DROP DATABASE IF EXISTS abdelwaheb_db;
CREATE DATABASE IF NOT EXISTS abdelwaheb_db;
USE abdelwaheb_db;

-- CREATE TABLE admin(
-- id INT NOT NULL AUTO_INCREMENT,
--     username VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     PRIMARY KEY(id)
-- );
CREATE TABLE  user(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    photo VARCHAR(255),
    role VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE sessions(
    id INT NOT NULL AUTO_INCREMENT,
    session VARCHAR (255) NOT NULL,
    user_id INT NOT NULL,
   logedin_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE postestext(
id INT NOT NULL AUTO_INCREMENT,
    bigTitle VARCHAR(155) NOT NULL,  
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    imagees VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE postes(
id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    views VARCHAR(150) NOT NULL,
    likes VARCHAR(150) NOT NULL,
    comments VARCHAR(255) NOT NULL,
    numberr VARCHAR(255) NOT NULL,
    video VARCHAR(255),
    PRIMARY KEY (id)
);
insert into user(username,email,phone_number,password,photo,role) values("Abdelwaheb BOUDEN","abdelwahebbouden2020@gmail.com","+216 52 489 389","c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f","http://cinematunisien.com/wp-content/uploads/2022/01/Abdelwaheb-Bouden-11.jpg","Admin")