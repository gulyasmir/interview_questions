/*
type TransformObject<T> = {
    [K in keyof T]: T[K][];
  };
  
  type Example = { a: number; b: string };
type Transformed = TransformObject<Example>; 
 
Error 

Duplicate identifier 'Example'.ts(2300)
1_myPartial.ts(7, 8): 'Example' was also declared here.
type Example = {
    a: number;
    b: string;
}

Ошибка Duplicate identifier 'Example' возникает, потому что Example уже определён где-то в другом месте вашего проекта или модуля. TypeScript не позволяет переопределять типы или переменные с одинаковыми именами в одной области видимости.

Решение

1. Переименуйте тип
Самый простой способ — использовать уникальное имя для вашего типа. Например:

type TransformObject<T> = {
  [K in keyof T]: T[K][];
};

type ExampleObject = { a: number; b: string }; // Уникальное имя
type Transformed = TransformObject<ExampleObject>;

Теперь ваш код станет корректным, и TypeScript не будет конфликтовать с другими определениями Example.

2. Проверьте дубликаты
Если Example уже объявлен в другом файле, это может быть глобальная область видимости или импорт.
Убедитесь, что в других файлах или модулях тип Example не объявлен повторно. 
Если он импортирован, возможно, вместо переопределения нужно использовать уже существующий.

3. Используйте модульную систему
Если ваш проект большой, рекомендуется использовать модули (например, ES6 import/export) для изоляции определений типов. Например:

typescript

В одном модуле:

// exampleTypes.ts
export type Example = { a: number; b: string };

В другом модуле:

// transform.ts
import { Example } from './exampleTypes';

type TransformObject<T> = {
  [K in keyof T]: T[K][];
};

type Transformed = TransformObject<Example>;



*/
