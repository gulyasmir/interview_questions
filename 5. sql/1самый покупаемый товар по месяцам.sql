/*
. Найти самый покупаемый товар по месяцам
Задача: Есть таблицы orders (заказы) и order_items (товары в заказах). Нужно вывести по каждому месяцу самый популярный товар.
*/

WITH MonthlyTop AS (
    SELECT 
        DATE_TRUNC('month', o.order_date) AS month,
        oi.product_id,
        COUNT(oi.product_id) AS total_sold,
        RANK() OVER (PARTITION BY DATE_TRUNC('month', o.order_date) ORDER BY COUNT(oi.product_id) DESC) AS rnk
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    GROUP BY month, oi.product_id
)
SELECT month, product_id, total_sold
FROM MonthlyTop
WHERE rnk = 1;
