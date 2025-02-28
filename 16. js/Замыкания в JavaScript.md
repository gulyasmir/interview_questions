# Замыкания в JavaScript


**Замыкание (closure)** — это функция, которая запоминает и имеет доступ к своей внешней области видимости, даже после того, как эта область видимости завершила выполнение.

### 🔹 Как работают замыкания?

Когда функция объявляется внутри другой функции, внутренняя функция получает доступ к переменным внешней функции. Если внутренняя функция сохраняется где-то и вызывается позже, она все равно будет "помнить" значения этих переменных.

* Замыкание "запоминает" лексическое окружение функции, в которой оно было создано.
* Позволяет создавать **приватные переменные**.
* Полезно в обработчиках событий, таймерах и модулях.
* Может вызвать **утечку памяти**, если ссылки на замыкание не удаляются.

### Простой пример:

```
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const newFunction = outerFunction("Замыкание");
newFunction("работает"); 
// Выведет: Outer: Замыкание, Inner: работает

```

Здесь `innerFunction` замкнулась на `outerFunction` и сохранила доступ к переменной `outerVariable`.

### Реальный кейс: Счётчик

```
function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(`Counter: ${count}`);
    };
}

const counter = createCounter();
counter(); // Counter: 1
counter(); // Counter: 2
counter(); // Counter: 3

```

Здесь функция `createCounter` создаёт приватную переменную `count`, а внутренняя функция имеет к ней доступ и увеличивает значение при каждом вызове.


### Использование в обработчиках событий:

```
function attachEventHandler() {
    let message = "Клик был!";

    document.getElementById("btn").addEventListener("click", function() {
        console.log(message);
    });
}
attachEventHandler();

```


Даже после завершения `attachEventHandler`, обработчик клика помнит переменную `message` и может её использовать.


### Создание приватных данных с замыканиями:

```
function User(name) {
    let _name = name; // Приватная переменная

    return {
        getName: function() {
            return _name;
        },
        setName: function(newName) {
            _name = newName;
        }
    };
}

const user = User("Alice");
console.log(user.getName()); // Alice
user.setName("Bob");
console.log(user.getName()); // Bob

```

Здесь `_name` не доступен извне, но доступен через методы `getName` и `setName`.

### Использование в `setTimeout`

```
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); 
    }, 1000);
}
// Выведет: 4, 4, 4 (из-за var)

```

Чтобы избежать этой проблемы, используем `let` или создаём замыкание:

```
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// Выведет: 1, 2, 3

```


**Используем замыкание с `var`**:

```
for (var i = 1; i <= 3; i++) {
    (function(i) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    })(i);
}
// Выведет: 1, 2, 3

```

Итог:

* Замыкание "запоминает" лексическое окружение функции, в которой оно было создано.
* Позволяет создавать **приватные переменные**.
* Полезно в обработчиках событий, таймерах и модулях.
* Может вызвать **утечку памяти**, если ссылки на замыкание не удаляются.
