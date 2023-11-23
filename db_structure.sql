CREATE TABLE Products (
    id VARCHAR(10) PRIMARY KEY,
    brand_id VARCHAR(255),
    name VARCHAR(255),
    categ_id INT,
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

CREATE TYPE gender AS ENUM ('1', '2', '3');
CREATE TYPE goals AS ENUM ('1', '2', '3', '4', '5');
CREATE TYPE skin_types AS ENUM ('1', '2', '3', '4', '5');
CREATE TYPE skin_concerns AS ENUM ('1', '2', '3', '4', '5');
CREATE TYPE skin_conditions AS ENUM ('1', '2', '3', '4', '5');
CREATE TYPE routine_products AS ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9');
CREATE TYPE products_used AS ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');
CREATE TYPE skincare_brands AS ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15');
CREATE TYPE makeup_brands AS ENUM ('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL,
    full_name VARCHAR(256) NOT NULL,
    gender gender,
    birthdate DATE,
    goals goals,
    skin_types skin_types,
    skin_concerns skin_concerns,
    skin_conditions skin_conditions,
    routine_products routine_products,
    using_makeup BOOLEAN,
    products_used products_used,
    skincare_brands skincare_brands,
    makeup_brands makeup_brands;
);

CREATE TABLE ProductReviews (
    id SERIAL PRIMARY KEY,
    added_at DATE NOT NULL DEFAULT CURRENT_DATE, 
    user_id NUMERIC NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    recommending BOOLEAN NOT NULL DEFAULT FALSE,
    title VARCHAR(255) NOT NULL,
    review TEXT NOT NULL ,
    rating NUMERIC CHECK (rating between 0 and 5 ) NOT NULL,
    UNIQUE(user_id, product_id)
);

CREATE TABLE Categories (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    slug VARCHAR(255)
    image VARCHAR(255)
)

CREATE TABLE FavoriteProducts (
    user_id INT,
    product_id VARCHAR(255),
    PRIMARY KEY (user_id, product_id)
)
