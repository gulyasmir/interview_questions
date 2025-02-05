/*
Promise.race([promise1, promise2, ...])
Возвращает первый выполненный промис (успешный или с ошибкой).
 Если первым выполнится промис с reject, то весь Promise.race отклонится.
*/
const p1 = new Promise(res => setTimeout(() => res('🐢 Медленный'), 3000));
const p2 = new Promise(res => setTimeout(() => res('🐇 Быстрый'), 1000));

Promise.race([p1, p2]).then(result => console.log('🚀 Победитель:', result));
