JavaScript не имеет встроенной структуры связного списка, но его можно реализовать вручную.


Структура узла списка

```class
constructor(value) {
this.value = value;
this.next = null;
}
}

```

Односвязный список

```
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Добавление в конец
  append(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Удаление по значению
  remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Поиск элемента
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Вывод списка
  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Использование
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.print();  // 1 -> 2 -> 3
list.remove(2);
list.print();  // 1 -> 3
console.log(list.find(3)); // ListNode { value: 3, next: null }

```

Двусвязный список

В отличие от односвязного списка, двусвязный содержит ссылки на **предыдущий и следующий узел**.

```
class DoublyListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Добавление в конец
  append(value) {
    let newNode = new DoublyListNode(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Удаление узла
  remove(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        return;
      }
      current = current.next;
    }
  }

  // Вывод списка
  print() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" <-> "));
  }
}

// Использование
let dList = new DoublyLinkedList();
dList.append(10);
dList.append(20);
dList.append(30);
dList.print();  // 10 <-> 20 <-> 30
dList.remove(20);
dList.print();  // 10 <-> 30

```
