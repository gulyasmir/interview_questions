/*
Ожидает выполнения всех промисов. Если один из них отклонен – весь Promise.all отклоняется.
Минус: если один промис отклонится → все Promise.all отклонится.
*/
const p1 = new Promise(res => setTimeout(() => res('🐢 Медленный'), 3000));
const p2 = new Promise(res => setTimeout(() => res('🐇 Быстрый'), 1000));

Promise.all([p1, p2]).then(results => console.log('Результаты:', results));

//Пример ошибки:

Promise.all([
    Promise.resolve('✅ Успех 1'),
    Promise.reject('❌ Ошибка'),
    Promise.resolve('✅ Успех 2'),
  ])
    .then(results => console.log(results)) // Не выполнится
    .catch(error => console.error('Ошибка в all:', error)); // Сработает catch
  