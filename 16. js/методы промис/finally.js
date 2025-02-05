//Метод всегда выполняется, независимо от результата (resolve или reject).
//Используется для очистки ресурсов (например, закрытие соединений).

myPromise
  .then(result => console.log('✅', result))
  .catch(error => console.error('❌', error))
  .finally(() => console.log('🔄 Завершение операции'));
