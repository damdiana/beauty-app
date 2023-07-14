CREATE TABLE Products (
    id VARCHAR(10) PRIMARY KEY,
    brand_id VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    ingredients TEXT
);

CREATE TABLE ProductImages (
    id SERIAL PRIMARY KEY,
    product_id VARCHAR(10),
    image VARCHAR(255)
);

CREATE TABLE Brands (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL
);