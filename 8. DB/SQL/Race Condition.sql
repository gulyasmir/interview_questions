function updateBalance(id, amount) {
    q('BEGIN')
    
    let balance = q('SELECT balance FROM user_balance WHERE user_id = :user_id', [id])
    
    if (balance > 0) {
        balance += amount
    }

    q('UPDATE user_balance SET balance = :balance WHERE user_id = :user_id', [balance, user_id])
    
    q('COMMIT')
}

/*
 изначально 1000 р
первый запрос  +500
второй запрос  -300
два запроса пришли одновременно и возникло состояние гонки.
как исправить?*/
/*
В  коде возникает состояние гонки, так как два запроса могут одновременно прочитать баланс, затем оба обновят его, перезаписывая друг друга.
Решение: 
1. Использование транзакционной блокировки (FOR UPDATE)
2. Выполнить т олько UPDATE
Для предотвращения гонки можно использовать SELECT ... FOR UPDATE, который блокирует строку, пока транзакция не завершится. Таким образом, второй запрос будет ждать, пока первый завершится.
Когда нужен FOR UPDATE?
Если вы сначала читайте баланс, а затем на основе этого выполняете UPDATE:
Но это хуже, чем просто UPDATE balance = balance + amount, потому что делает два запроса вместо одного.
*/

function updateBalance(id, amount) {
    q('BEGIN') // Начинаем транзакцию
    
    -- Блокируем строку, чтобы другие транзакции ждали завершения этой
    let balance = q('SELECT balance FROM user_balance WHERE user_id = :user_id FOR UPDATE', [id])

    -- Изменяем баланс
    balance += amount

    -- Обновляем баланс в БД
    q('UPDATE user_balance SET balance = :balance WHERE user_id = :user_id', [balance, id])

    q('COMMIT') // Фиксируем изменения
}

/* в данном случае FOR UPDATE не нужен, потому что вы не читаете баланс перед обновлением, а сразу выполняете атомарную операцию */
function updateBalance(id, amount) {
    q('BEGIN')

    q('UPDATE user_balance SET balance = balance + :amount WHERE user_id = :user_id', [amount, id])

    q('COMMIT')
}

function updateBalance(id, amount) {
    try {
        q('BEGIN')

        q('UPDATE user_balance SET balance = balance + :amount WHERE user_id = :user_id', [amount, id])

        q('COMMIT')
    } catch (error) {
        q('ROLLBACK') // Откат изменений при ошибке
        throw error
    }
}

/*
FOR UPDATE нужен, только если есть SELECT перед UPDATE
🔹 Простой UPDATE balance = balance + amount уже потокобезопасен

Почему FOR UPDATE не требуется?
Вы не читаете баланс перед обновлением

Если бы сначала был SELECT balance FROM user_balance WHERE user_id = :user_id, тогда нужна блокировка FOR UPDATE, чтобы избежать гонки.
Но здесь сразу выполняется атомарный UPDATE, который сам по себе потокобезопасен.
UPDATE уже блокирует строку на запись

В SQL, UPDATE накладывает эксклюзивную блокировку (row-level lock) на изменяемую строку.
Другие транзакции, которые попытаются обновить ту же строку, будут ждать завершения текущей транзакции.
Более эффективно, чем SELECT ... FOR UPDATE

SELECT ... FOR UPDATE использует два запроса (SELECT + UPDATE), что увеличивает нагрузку на базу данных.
UPDATE ... SET balance = balance + amount делает всё за один запрос.
*/