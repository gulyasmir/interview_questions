/*
Вывести ID пользователя, дату первого и последнего заказа.
*/

SELECT 
    user_id,
    MIN(order_date) AS first_order,
    MAX(order_date) AS last_order
FROM orders
GROUP BY user_id;
