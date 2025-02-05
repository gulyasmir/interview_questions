/*
Найти 5 клиентов, которые потратили больше всех.
*/
SELECT u.id, u.name, SUM(o.total_amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC
LIMIT 5;
