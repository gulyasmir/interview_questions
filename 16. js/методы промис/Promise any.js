Promise.any([
    Promise.reject('❌ Ошибка 1'),
    new Promise(res => setTimeout(() => res('✅ Успех через 2 сек'), 2000)),
    Promise.reject('❌ Ошибка 2'),
  ])
    .then(result => console.log('Первый успешный:', result))
    .catch(error => console.error('Все промисы провалены:', error));
// Возвращает первый успешный промис. Если все промисы отклонены, вернет AggregateError.
  // ✅ Вывод через 2 сек: Первый успешный: ✅ Успех через 2 сек

//Если все промисы отклонены, то:

//AggregateError: All promises were rejected
