myPromise
  .then(result => console.log('✅ Успех:', result))
  .catch(error => console.error('❌ Ошибка:', error));
// Позволяет обработать ошибку, если промис был отклонен (reject).
/*
 Отличие от then(null, errorCallback):
catch() ловит ошибки на любом этапе цепочки.
*/
// Пример с ошибкой в then():
myPromise
  .then(result => {
    console.log('Результат:', result);
    throw new Error('Ошибка в then');
  })
  .catch(error => console.error('Поймано:', error.message));
