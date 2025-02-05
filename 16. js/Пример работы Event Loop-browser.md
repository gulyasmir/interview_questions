### **Пример работы Event Loop**

#### 📌 **Браузер**

```
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

```

**Результат в браузере**:

```
1
4
3
2

```


**Объяснение**:

1. `console.log('1')` и `console.log('4')` выполняются синхронно.
2. `setTimeout` отправляется в **Task Queue**.
3. `Promise.then()` отправляется в **Microtask Queue** (он имеет **более высокий приоритет**).
4. Event Loop сначала выполняет **микрозадачи** (`3`), потом **таймер** (`2`).
