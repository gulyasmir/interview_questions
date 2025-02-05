Node.js

```
console.log('1');

setTimeout(() => console.log('2'), 0);
setImmediate(() => console.log('3'));

Promise.resolve().then(() => console.log('4'));

process.nextTick(() => console.log('5'));

console.log('6');

```

**Результат в Node.js**:

```
1
6
5
4
3
2

```

**Объяснение**:

1. `console.log('1')` и `console.log('6')` выполняются синхронно.
2. `process.nextTick()` (`5`) выполняется **до Promise** (`4`).
3. `setImmediate()` (`3`) выполняется **раньше `setTimeout(0)` (`2`)**.
