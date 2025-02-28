# Схема работы Event Loop в Node.js (серверный вариант)

Call Stack (Стек вызовов)

1. Web API / C++ Bindings (Асинхронные операции, fs, net, http, setTimeout)
2. Microtask Queue (Promise, process.nextTick)
3. Event Loop (Цикл событий)
4. Callback Queue (Очередь колбэков)
5. Worker Threads / Thread Pool (libuv)

**Порядок выполнения в Node.js**

1. **Запускается синхронный код** в Call Stack.
2. **Асинхронные операции (I/O, таймеры, сетевые запросы, БД)** передаются в libuv (C++ API).
3. **Promise и process.nextTick** добавляются в Microtask Queue.
4. **Event Loop сначала выполняет все микрозадачи** из Microtask Queue.
5. **После выполнения стека вызовов (Call Stack), Event Loop переходит к фазам**:
   * **Timers** (setTimeout, setInterval)
   * **Pending callbacks** (ошибки в I/O)
   * **Idle, prepare** (внутреннее)
   * **Poll** (основная фаза обработки I/O)
   * **Check** (setImmediate)
   * **Close callbacks** (socket.on('close'))
6. **Microtask Queue обрабатывается после каждой фазы**.
7. **Цикл повторяется**.

**process.nextTick всегда выполняется перед Promise**.
✔ **setImmediate выполняется после I/O, а setTimeout после заданного времени**.
✔ **I/O обработчики выполняются в poll-фазе Event Loop**.

### **Приоритет выполнения в Node.js**

1. **Синхронный код**
2. **process.nextTick (самый высокий приоритет!)**
3. **Promise (then/catch/finally)**
4. **Timers (setTimeout, setInterval)**
5. **setImmediate (после poll)**
6. **I/O колбэки (fs, net, http, БД, сокеты)**

#### **Worker Threads (Многопоточность в JS)**

* Используются для CPU-интенсивных задач (шифрование, обработка изображений).
* Работают в отдельных потоках (не блокируют основной поток).
* Обмениваются данными через `MessagePort`.

#### **Thread Pool (Пул потоков в libuv)**

* Используется для асинхронных C++ API (fs, crypto, zlib, DNS).
* По умолчанию 4 потока (`UV_THREADPOOL_SIZE` можно увеличить).

Задача чтения файла выполняется в **пуле потоков** и не блокирует Event Loop.

**Worker Threads – для CPU-загрузки**
✔ **Thread Pool – для асинхронных операций (I/O, криптография)**

#### **Ключевые различия**


| **Feature**                         | **Worker Threads**                           | **Thread Pool (libuv)**                                   |
| ----------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| Количество потоков | Гибкое (создаём вручную) | По умолчанию 4 (можно увеличить) |
| Используется для     | CPU-задач                               | I/O-запросов (fs, crypto)                         |
| Передача данных       | MessagePort (JSON, Buffer)                   | Автоматически внутри libuv             |
| Блокирует Event Loop?      | Нет                                       | Нет                                                    |




# Схема Event Loop в JavaScript

1. Call Stack (Стек вызовов)
2. Web API (Асинхронные API, таймеры, обработчики событий)
3. Callback Queue (Очередь колбэков)
4. Event Loop (Цикл событий)
5. Microtask Queue (Очередь микрозадач: Promise, process.nextTick)

### Порядок выполнения:

1. **Выполняется код синхронно** в основном потоке (Call Stack).
2. **Асинхронные операции (setTimeout, fetch, I/O)** передаются в Web API.
3. **После завершения асинхронной операции** её колбэк отправляется в Callback Queue.
4. **Promise и process.nextTick** попадают в Microtask Queue.
5. **Event Loop сначала выполняет весь Call Stack**.
6. **Microtask Queue выполняется перед Callback Queue**.
7. **Затем Event Loop берёт задачи из Callback Queue** и отправляет в Call Stack.
8. **Повторение цикла** (шаг 5).

🔹 **Приоритет**: синхронный код → microtasks → колбэки из Callback Queue.
