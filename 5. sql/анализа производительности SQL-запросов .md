PostgreSQL:

**EXPLAIN:** Показывает план выполнения запроса, позволяя понять, какие операции выполняются и какие индексы используются.

```
EXPLAIN SELECT * FROM your_table WHERE condition;

```

**EXPLAIN ANALYZE:** Выполняет запрос и предоставляет подробную информацию о фактическом времени выполнения каждой операции.

```
EXPLAIN ANALYZE SELECT * FROM your_table WHERE condition;

```
