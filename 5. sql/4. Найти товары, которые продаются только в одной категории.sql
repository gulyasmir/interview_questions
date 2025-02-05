/*
Задача: Найти товары, принадлежащие только одной категории.
*/

SELECT product_id
FROM product_categories
GROUP BY product_id
HAVING COUNT(DISTINCT category_id) = 1;
