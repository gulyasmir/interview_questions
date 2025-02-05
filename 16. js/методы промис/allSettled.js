/*
Promise.allSettled([promise1, promise2, ...])
Ожидает выполнения всех промисов, независимо от ошибок. Возвращает массив с результатами {status, value | reason}.

Используется, если надо обработать ВСЕ результаты, а не прерывать выполнение из-за ошибки.
*/
Promise.allSettled([
    Promise.resolve('✅ Успех 1'),
    Promise.reject('❌ Ошибка'),
    Promise.resolve('✅ Успех 2'),
  ])
    .then(results => console.log(results));
  
    /*
     Вывод:
[
  { status: 'fulfilled', value: '✅ Успех 1' },
  { status: 'rejected', reason: '❌ Ошибка' },
  { status: 'fulfilled', value: '✅ Успех 2' }
]

     */