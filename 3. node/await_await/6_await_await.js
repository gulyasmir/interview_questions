// Этот код имеет интересное поведение из-за особенностей работы с промисами в JavaScript.

let incrementValue = 0;
async function increment() {
  return ++incrementValue;
}

const promise = increment();

const result1 = await promise;
const result2 = await promise;

