В TypeScript есть несколько типов данных и структур, которые помогают организовывать код и обеспечивать строгую типизацию. Давайте рассмотрим основные из них.

**Примитивные типы**:

TypeScript поддерживает все примитивные типы JavaScript:

```let
let str: string = "Hello";    // Строка
let bool: boolean = true;     // Булево значение
let n: null = null;           // Null
let u: undefined = undefined; // Undefined
let bigInt: bigint = 9007199254740991n; // BigInt
let sym: symbol = Symbol("key"); // Symbol

```

**Массивы**:

```
let numbers: number[] = [1, 2, 3, 4, 5]; // массив чисел
let words: Array<string> = ["a", "b", "c"]; // альтернативная запись через `Array<T>`

```

Кортежи (Tuples)

```let
let coords: [number, number] = [10, 20];

```

**Enum (Перечисления)**:

Используются для представления набора именованных значений.

```enum
Success = "SUCCESS",
Error = "ERROR",
Loading = "LOADING"
}
let currentStatus: Status = Status.Success;
console.log(currentStatus); // "SUCCESS"

```

**Объекты (Objects)**:

```let
let user: { name: string; age: number } = { name: "John", age: 25 };
```

Интерфейсы (Interfaces)

Интерфейсы используются для определения структуры объектов.

```
interface User {
  name: string;
  age: number;
}

const user1: User = { name: "Alice", age: 30 };

```

Типы (Type Aliases)

Type позволяет объявлять именованные типы.

```
type ID = string | number;

let userId: ID = 123;
let orderId: ID = "abc-456";

```

**Union и Intersection (Объединения и пересечения типов)**:

```
type Admin = { role: "admin" };
type Moderator = { role: "moderator" };

type UserRole = Admin | Moderator; // Union (или)
type FullUser = Admin & { name: string }; // Intersection (и)

```

Функции

```

function add(a: number, b: number): number {
  return a + b;
}

// Стрелочная функция
const multiply = (a: number, b: number): number => a * b;

// Функция с необязательным параметром
function greet(name: string, age?: number): void {
  console.log(`Hello, ${name}!`);
}

// Функция с параметром по умолчанию
function greetWithDefault(name: string = "Guest"): void {
  console.log(`Hello, ${name}!`);
}

```

Generic (Обобщенные типы)

```
function identity<T>(value: T): T {
  return value;
}

let output1 = identity<string>("Hello"); 
let output2 = identity<number>(123); 

```

Классы (Classes)

```

class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }
}

let myDog = new Dog("Rex", "Labrador");
myDog.speak();

```

Map, Set, WeakMap, WeakSet


В JavaScript и TypeScript существуют четыре структуры данных для хранения коллекций: `Map`, `Set`, `WeakMap` и `WeakSet`. Все они являются объектами, но имеют различия в поведении и использовании.

**Map**:

* Хранит пары "ключ-значение", где ключами могут быть значения любого типа (включая объекты, строки, числа и функции).
* Поддерживает методы для добавления (`set`), получения (`get`), удаления (`delete`) и проверки наличия (`has`) элементов.
* Итерируемый: можно перебирать ключи, значения или пары "ключ-значение".

**Set**:

* Хранит уникальные значения любого типа.
* Поддерживает методы для добавления (`add`), удаления (`delete`) и проверки наличия (`has`) элементов.
* Итерируемый: можно перебирать значения.

**WeakMap**:

* Хранит пары "ключ-значение", где ключами могут быть только объекты.
* Ключи являются "слабыми" ссылками, что позволяет сборщику мусора удалять записи, если на объект-ключ больше нет ссылок в коде.
* Не поддерживает итерирование или методы для получения всех ключей или значений.

**WeakSet**:

* Хранит уникальные объекты.
* Объекты являются "слабыми" ссылками, что позволяет сборщику мусора удалять записи, если на объект больше нет ссылок в коде.
* Не поддерживает итерирование или методы для получения всех элементов.

**Основные различия**:

* **Сильные и слабые ссылки**: `Map` и `Set` используют сильные ссылки на свои элементы, что предотвращает их удаление сборщиком мусора. `WeakMap` и `WeakSet` используют слабые ссылки, позволяя сборщику мусора удалять элементы, если на них больше нет ссылок.
* **Типы ключей**: В `Map` ключами могут быть значения любого типа, тогда как в `WeakMap` — только объекты.
* **Итерируемость**: `Map` и `Set` поддерживают итерирование, позволяя перебирать их элементы. `WeakMap` и `WeakSet` не поддерживают итерирование из-за особенностей работы со слабыми ссылками и сборщиком мусора.

```
let map = new Mapstring,();
map.set("one", 1);
map.set("two", 2);let set = new Setnumber();
set.add(1);
set.add(2);
set.add(3);
```

Readonly & Partial (Утилитарные типы)

```
interface User {
  name: string;
  age: number;
}

let readonlyUser: Readonly<User> = { name: "Alice", age: 30 };
// readonlyUser.age = 31; // Ошибка: свойство только для чтения

let partialUser: Partial<User> = { name: "Bob" }; // Можно задать только часть полей

```

**Record, Pick, Omit**:

```
type Roles = "admin" | "user";

let users: Record<Roles, string> = {
  admin: "Alice",
  user: "Bob"
};

type Person = { name: string; age: number; city: string };

let pickedPerson: Pick<Person, "name" | "city"> = { name: "John", city: "NY" };
let omittedPerson: Omit<Person, "age"> = { name: "Jane", city: "LA" };

```
