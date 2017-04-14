CREATE TABLE images (
	imageUrl VARCHAR(255),
	title VARCHAR(255),
	description VARCHAR(255)
);

CREATE TABLE users (
	username VARCHAR(255),
	password VARCHAR(255),
);

CREATE TABLE photoAlbum (
	albumName VARCHAR(255),
	uploadDate VARCHAR(255),
	creator VARCHAR(255)
);
