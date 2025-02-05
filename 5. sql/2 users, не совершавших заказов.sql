/*
Найти пользователей, не совершавших заказов
Задача: Есть таблицы users и orders. Нужно найти всех пользователей, которые никогда не делали заказ.
*/
SELECT u.id, u.name
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
