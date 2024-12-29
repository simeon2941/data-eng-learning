// src/examples/fundamentals/beginner/etl-basics/code-samples/sql/queries.sql
-- Create staging table
CREATE TABLE staging_sales (
    id INT,
    date DATE,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2),
    customer_id INT
);

-- Transform data
CREATE TABLE transformed_sales AS
SELECT 
    id,
    date,
    EXTRACT(YEAR FROM date) as year,
    EXTRACT(MONTH FROM date) as month,
    product_id,
    quantity,
    price,
    quantity * price as total_amount,
    customer_id
FROM staging_sales
WHERE quantity > 0
  AND price > 0;

-- Load into final table
INSERT INTO sales_fact
SELECT * FROM transformed_sales;