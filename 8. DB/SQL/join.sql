/*
product
- id
- title

category
- id
- title

category_product
- category_id
- product_id



-- Выбрать все категории без товаров
*/

SELECT c.*
FROM category c
LEFT JOIN category_product cp ON cp.category_id = c.id -- LEFT JOIN оставляет все категории, даже если у них нет соответствий в category_product
WHERE cp.product_id IS NULL;
