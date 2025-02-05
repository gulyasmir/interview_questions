/*
Найти пользователей, которые делали хотя бы один заказ каждый месяц за последние 12 месяцев.
*/

WITH UserMonthlyOrders AS (
    SELECT user_id, DATE_TRUNC('month', order_date) AS order_month
    FROM orders
    WHERE order_date >= CURRENT_DATE - INTERVAL '12 months'
    GROUP BY user_id, order_month
)
SELECT user_id
FROM UserMonthlyOrders
GROUP BY user_id
HAVING COUNT(DISTINCT order_month) = 12;
