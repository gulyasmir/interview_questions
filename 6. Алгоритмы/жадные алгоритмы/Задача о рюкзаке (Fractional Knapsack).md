```
function knapsack(items, capacity) {
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight)); // Сортируем по удельной стоимости
    let totalValue = 0;

    for (let item of items) {
        if (capacity >= item.weight) {
            capacity -= item.weight;
            totalValue += item.value;
        } else {
            totalValue += (item.value / item.weight) * capacity;
            break;
        }
    }
    return totalValue;
}

console.log(knapsack([{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }], 50)); // 240

```
