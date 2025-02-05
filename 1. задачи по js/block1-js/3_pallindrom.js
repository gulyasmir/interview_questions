// функция проверяет, является ли строка паллинромом

//  Использует константное количество памяти (O(1)).
//  Более оптимальна для работы с большими строками, так как не создаёт дополнительных структур данных.
function pallindrom(text) {
    let left = 0;
    let right = text.length - 1;

    while (left < right) {
        if (text[left] !== text[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


// Использует линейное количество памяти (O(n)), создавая новые массивы и строки.
// Менее эффективна для работы с длинными строками.
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello"));   // false