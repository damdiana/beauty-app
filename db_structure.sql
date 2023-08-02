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

CREATE TABLE ProductReviews (
    id SERIAL PRIMARY KEY,
    added_at DATE NOT NULL DEFAULT CURRENT_DATE, 
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    recommending BOOLEAN NOT NULL DEFAULT FALSE,
    title VARCHAR(255) NOT NULL,
    review TEXT NOT NULL ,
    rating NUMERIC CHECK (rating between 0 and 5 ) NOT NULL,
    UNIQUE(user_id, product_id)
);