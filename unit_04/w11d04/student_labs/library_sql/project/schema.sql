CREATE TABLE user
(
  email VARCHAR(255) NOT NULL,
  username VARCHAR(355) NOT NULL,
  password VARCHAR(355) NOT NULL
);

CREATE TABLE images
(
  title VARCHAR(255) NOT NULL,
  id INT NOT NULL AUTO_INCREMENT ,
  description VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255) NOT NULL
);

CREATE TABLE album
(
  title VARCHAR(255) NOT NULL,
  id INT NOT NULL AUTO_INCREMENT ,
  totalPhotos INT NOT NULL
);

