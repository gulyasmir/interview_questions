### **Что такое очередь?**

Очередь – это структура данных, работающая по принципу **FIFO** (*First In, First Out* – первый пришёл, первый ушёл).
Пример из жизни: очередь в магазине – тот, кто первый пришёл, первый обслуживается.

### **Операции в очереди**


| Операция                | Метод       | Время (Big-O) | Описание                                   |
| ------------------------------- | ---------------- | ------------------ | -------------------------------------------------- |
| Добавление            | `enqueue(value)` | `O(1)`             | Добавляет элемент в конец    |
| Удаление                | `dequeue()`      | `O(1)`             | Удаляет элемент из начала    |
| Просмотр первого | `front()`        | `O(1)`             | Возвращает первый элемент   |
| Проверка пустоты | `isEmpty()`      | `O(1)`             | Проверяет, пуста ли очередь |


### **Реализация очереди на связном списке (эффективная)**


```
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.head = this.tail = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  isEmpty() {
    return !this.head;
  }
}

// Использование
let linkedQueue = new LinkedQueue();
linkedQueue.enqueue(10);
linkedQueue.enqueue(20);
console.log(linkedQueue.dequeue()); // 10

```

### **Где используется очередь?**

✅ **Обработка задач в `Event Loop` (setTimeout, setImmediate, process.nextTick)**
✅ **Очередь печати, очередь сообщений**
✅ **Алгоритмы поиска (BFS – поиск в ширину)**
✅ **Имитация реальных очередей (например, банкомат)*
















### **Реализация очереди на массиве (неэффективная)**

⚠ **Почему `shift()` неэффективен?**
Удаление первого элемента в массиве требует **сдвига всех элементов**, что делает его **медленным (`O(n)`)**.

```
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift(); // Операция `O(n)`, так как сдвигает все элементы
  }

  front() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Использование
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.isEmpty()); // false

```

f
