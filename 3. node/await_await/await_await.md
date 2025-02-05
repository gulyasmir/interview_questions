Этот код имеет интересное поведение из-за особенностей работы с промисами в JavaScript.


```
let incrementValue = 0; 
async function increment() {   
  return ++incrementValue; 
}
const promise = increment(); 
const result1 = await promise; 
const result2 = await promise;
```

### Разбор

1. **Объявление функции и переменной:**

   ```
   let incrementValue = 0; 
   async function increment() { 
     return ++incrementValue; 
   }  
   const promise = increment(); 
   const result1 = await promise; 
   const result2 = await promise;
   ```

   </code></div></div></pre>

   * `incrementValue` — это глобальная переменная, изначально равная 0.
   * `increment()` — асинхронная функция, которая увеличивает значение `incrementValue` на 1 и возвращает его.
2. **Создание промиса:**

   ```
   const promise = increment();

   ```

   * Здесь вызывается `increment()`, который возвращает промис. В момент вызова, `incrementValue` увеличивается на 1 (с 0 до 1).
   * Значение `promise` теперь — это промис, который резолвится со значением `1`.
3. **Первый `await`:*

   ```
   const result1 = await promise;
   ```

   * Здесь `await` ждёт завершения промиса `promise`. Так как промис уже создан и его результат уже известен (1), `result1` будет равен `1`.
4. **Второй `await`:**

   ```
   const result2 = await promise;
   ```

   * Здесь `await` снова ждёт того же самого промиса `promise`. Его результат уже кеширован, поэтому `result2` также будет равен `1`.

### Итоговые значения переменных:

* **`result1`**: `1`
* **`result2`**: `1`
* **`incrementValue`**: `1` (было увеличено только один раз, когда `increment()` вызвали первый раз).

### Основная причина

Промисы в JavaScript являются одноразовыми: результат их выполнения (или ошибка) фиксируется при первом выполнении, и все дальнейшие обращения к этому промису возвращают тот же результат. Это значит, что даже если вы дважды используете `await` для одного и того же промиса, его результат не изменится.
