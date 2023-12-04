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

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL,
    full_name VARCHAR(256) NOT NULL,
    gender gender,
    birthdate timestamp without time zone,
    goals jsonb DEFAULT '[]'::jsonb,
    skin_types jsonb DEFAULT '[]'::jsonb,
    skin_concerns jsonb DEFAULT '[]'::jsonb,
    skin_conditions jsonb DEFAULT '[]'::jsonb,
    routine_products jsonb DEFAULT '[]'::jsonb,
    using_makeup BOOLEAN,
    products_used jsonb DEFAULT '[]'::jsonb,
    skincare_brands jsonb DEFAULT '[]'::jsonb,
    makeup_brands jsonb DEFAULT '[]'::jsonb
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

CREATE TABLE JournalEntries (
   id SERIAL PRIMARY KEY,
   user_id INT NOT NULL, 
   json_content jsonb NOT NULL,
   entry_date timestamp without time zone NOT NULL
)
