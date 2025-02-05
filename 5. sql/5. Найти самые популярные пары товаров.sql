/*
 Найти две самых популярных комбинации товаров, которые покупают вместе.
*/

SELECT oi1.product_id AS product_1, oi2.product_id AS product_2, COUNT(*) AS freq
FROM order_items oi1
JOIN order_items oi2 ON oi1.order_id = oi2.order_id AND oi1.product_id < oi2.product_id
GROUP BY oi1.product_id, oi2.product_id
ORDER BY freq DESC
LIMIT 2;
