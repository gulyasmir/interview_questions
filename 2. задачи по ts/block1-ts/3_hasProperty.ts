// Проверка существования свойства
function hasProperty<T extends object>(obj: T, key: keyof T): boolean {
    return key in obj;
}

const myObj = { name: "John", age: 30 };
console.log(hasProperty(myObj, "name")); // true
console.log(hasProperty(myObj, "name" as keyof typeof myObj));
// Если вы хотите передать строку, которая может не быть ключом объекта:
console.log(hasProperty(myObj, "gender" as keyof typeof myObj)); // false

// Если нужно разрешить проверку любого ключа, вы можете указать второй аргумент как строку:
// Однако в этом случае вы теряете строгую типизацию для ключей объекта
function hasProperty1<T extends object>(obj: T, key: string): boolean {
    return key in obj;
}

/*
T extends object:

Гарантирует, что T всегда будет объектом, устраняя ошибку Type 'T' is not assignable to type 'object'.
Переименование obj:

Исключает конфликт с другими переменными в области видимости.
Утверждение типа:

Использование as keyof typeof obj позволяет передать строку, которая может не быть ключом, но это ваше явное указание TypeScript доверять коду.
Строгая типизация:

Второй аргумент ограничивается ключами объекта keyof T, что предотвращает передачу недопустимых ключей.
*/
