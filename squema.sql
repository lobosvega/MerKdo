DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INIT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
);

SELECT * FROM products

-- Insert rows into table  products'
INSERT INTO products
( -- columns to insert data into
 product_name, department_name, price, stock_quantity
)
VALUES
( -- first row: values for the columns in the list above
 DANSE MACABRE, BOOK, 10.00, 9
),
( -- second row: values for the columns in the list above
 KEITH RICHARDS LIFE, BOOK, 35.00, 5
),
( -- second row: values for the columns in the list above
 DALI, BOOK, 150.00, 2
),
( -- second row: values for the columns in the list above
 JAPAN A HISTORY IN ART, BOOK, 80.00, 1
),
( -- second row: values for the columns in the list above
 SPIRITUAL HERITAGE OF INDIA, BOOK, 15.00, 1
),
( -- second row: values for the columns in the list above
 INDOCHINE, BOOK, 45, 10
),
( -- second row: values for the columns in the list above
 BERGDORF GOODMAN, MAGAZINE, 25.00, 20
),
( -- second row: values for the columns in the list above
 VOGUE, MAGAZINE, 10.00, 150
),
( -- second row: values for the columns in the list above
 FLAUNT, MAGAZINE, 35.00, 19
),
