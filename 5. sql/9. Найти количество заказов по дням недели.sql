/*  Посчитать количество заказов, сгруппировав по дням недели.*/

SELECT 
    TO_CHAR(order_date, 'Day') AS day_of_week,
    COUNT(*) AS order_count
FROM orders
GROUP BY day_of_week
ORDER BY order_count DESC;

/*
TO_CHAR(order_date, 'Day') AS day_of_week
*/

SELECT 
    TO_CHAR(NOW(), 'YYYY-MM-DD') AS formatted_date, -- 2025-02-04
    TO_CHAR(NOW(), 'Month') AS month_name,        -- February 
    TO_CHAR(NOW(), 'Dy') AS short_day_name,       -- Tue
    TO_CHAR(NOW(), 'HH24:MI:SS') AS time_24h,     -- 14:35:12
    TO_CHAR(NOW(), 'FMDay') AS trimmed_day        -- Tuesday (без пробелов)

    /*
     Форматы TO_CHAR для дат:

Формат	Описание
YYYY	Год (2024)
MM	    Номер месяца (01-12)
Month	Полное название месяца (February)
DD	    День месяца (01-31)
Day	    Полное название дня недели (Tuesday)
Dy	    Короткое название дня недели (Tue)
HH24	Часы в 24-часовом формате (14)
MI	    Минуты (35)
SS	    Секунды (12)

*/