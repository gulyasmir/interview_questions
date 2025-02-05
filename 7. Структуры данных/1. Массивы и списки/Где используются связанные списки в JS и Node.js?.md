## **1. Где используются связанные списки в JS и Node.js?**

Связанные списки – мощный инструмент в **Node.js**, особенно в **очередях задач, потоках и кэшировании**. Они скрыто используются в движке V8 и позволяют оптимизировать выполнение асинхронных операций.

### **1.1 Встроенные структуры данных**

Внутри JavaScript-движков (например, V8) **связанные списки** активно используются для реализации таких структур, как:

* **`Map` и `Set`** – используют **хэш-таблицы + двусвязный список** для хранения порядка вставки.
* **`WeakMap` и `WeakSet`** – могут использовать список для организации связей между объектами.
* **`Promise` (цепочки обработчиков)** – реализованы как односвязные списки.
* **Механизм `Event Loop` в Node.js** – использует очередь (по сути, связанный список) для обработки задач.

### **1.2 Очереди задач (Task Queue) в Node.js**

Когда Node.js выполняет асинхронные операции (например, обработку `setTimeout`, `setImmediate`, `process.nextTick()`), задачи ставятся в очередь.
Эта очередь **обычно реализована как связанный список** для быстрого удаления и добавления элементов.

Пример простейшей очереди:

```
class TaskQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(task) {
    let newNode = new ListNode(task);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return null;
    let task = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return task;
  }
}

```

Использование такой структуры позволяет **эффективно обрабатывать очереди событий** в Node.js.

### **1.3 Буферы и потоки в Node.js (`Buffer`, `Stream`)**

Node.js активно использует **буферы и потоки** (`Stream`) для обработки данных.
При передаче больших данных потоками **(например, чтение файлов, HTTP-запросы, WebSockets)**,
данные **разбиваются на чанки и хранятся в связанном списке**.

#### **Пример использования связного списка в `ReadableStream`**

Node.js использует **буферизированные списки для потоков** (`Stream`).
Каждый новый фрагмент данных (`chunk`) **добавляется в конец списка** для эффективной обработки:

```

const { Readable } = require('stream');

class MyStream extends Readable {
  constructor(data) {
    super();
    this.data = data;
    this.index = 0;
  }

  _read() {
    if (this.index < this.data.length) {
      this.push(this.data[this.index++]); // Добавляем в очередь
    } else {
      this.push(null); // Завершаем поток
    }
  }
}

const stream = new MyStream(['Hello', ' ', 'World', '!']);
stream.on('data', chunk => console.log(chunk.toString())); 
// Вывод: Hello World!

```

</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"></div></div></pre>

В `ReadableStream` данные хранятся **в связном списке**, что делает их обработку **более эффективной**.

### **1.4 Реализация кэша (LRU Cache)**

LRU (Least Recently Used) – это кэш, который **хранит ограниченное количество элементов и удаляет самые старые при добавлении новых**.
Часто реализуется на основе **хэш-таблицы + двусвязного списка**.

Пример реализации **LRU Cache**:

```
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this._moveToHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.value = value;
      this._moveToHead(node);
      return;
    }
    let newNode = { key, value, next: null, prev: null };
    this.map.set(key, newNode);
    this._addToHead(newNode);
    if (this.map.size > this.capacity) {
      this._removeTail();
    }
  }

  _addToHead(node) {
    node.next = this.head;
    if (this.head) this.head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = node;
  }

  _moveToHead(node) {
    if (node === this.head) return;
    if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    this._addToHead(node);
  }

  _removeTail() {
    if (!this.tail) return;
    this.map.delete(this.tail.key);
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
  }
}

// Использование
const cache = new LRUCache(2);
cache.put(1, "one");
cache.put(2, "two");
console.log(cache.get(1)); // "one"
cache.put(3, "three"); // Удалит ключ 2, так как он устарел
console.log(cache.get(2)); // -1 (удалён)

```

**Зачем здесь связный список?**

* **Быстрое перемещение элементов** (в начало при использовании).
* **Быстрое удаление самого старого элемента** (из конца).
* **Оптимальное использование памяти**.

### **1.5 Работа с WebSockets**

При работе с **WebSockets** сервер может поддерживать множество соединений.
Каждое соединение представляется **объектом в связанном списке**, где каждое соединение ссылается на следующее.

```
class ConnectionNode {
  constructor(socket) {
    this.socket = socket;
    this.next = null;
  }
}

class ConnectionList {
  constructor() {
    this.head = null;
  }

  add(socket) {
    let newNode = new ConnectionNode(socket);
    newNode.next = this.head;
    this.head = newNode;
  }

  remove(socket) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.socket === socket) {
        if (prev) prev.next = current.next;
        else this.head = current.next;
        return;
      }
      prev = current;
      current = current.next;
    }
  }
}

```

Такой **связанный список** может эффективно управлять списком подключений.

## **2. Итог**

### **Когда использовать связные списки в JavaScript/Node.js?**

✅ Когда **неизвестен размер структуры** и требуется **гибкость**.
✅ Когда важны **быстрое удаление и вставка** (например, кэш, WebSockets).
✅ В **очередях задач**, буферах **`Stream`**, LRU Cache.
✅ В **реализации событийного цикла (Event Loop)**.
✅ В **встроенных механизмах JS** (`Map`, `Set`, `Promise`, `WeakMap`).

### **Когда НЕ использовать?**

❌ Если **нужен быстрый доступ по индексу** – массивы (`Array`) работают лучше (`O(1)`).
❌ Когда **количество элементов фиксировано** – массивы эффективнее по памяти.

### **Вывод**

Связанные списки – мощный инструмент в **Node.js**, особенно в **очередях задач, потоках и кэшировании**. Они скрыто используются в движке V8 и позволяют оптимизировать выполнение асинхронных операций. 🚀
