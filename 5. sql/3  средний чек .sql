/*
Найти средний чек за последние 3 месяца
Задача: Рассчитать среднюю сумму заказов за последние 3 месяца.
*/
SELECT 
    DATE_TRUNC('month', order_date) AS month,
    AVG(total_amount) AS avg_check
FROM orders
WHERE order_date >= CURRENT_DATE - INTERVAL '3 months'
GROUP BY month
ORDER BY month DESC;
