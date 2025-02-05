/*

1. new Promise((resolve, reject) => {...})
Создает новый промис, который принимает функцию-исполнитель с двумя аргументами:

resolve(value) → вызывает успех, передает результат.
reject(error) → вызывает ошибку, передает причину.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve('✅ Успех!');
      else reject('❌ Ошибка!');
    }, 1000);
  });
  
  myPromise
    .then(result => console.log(result)) // Выведет "✅ Успех!" при удачном выполнении
    .catch(error => console.error(error)) // Выведет "❌ Ошибка!" при неудаче
    .finally(() => console.log('Операция завершена')); // Всегда выполняется
  