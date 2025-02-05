//Обход в ширину (BFS) для графа (списки смежности)
// Для примера возьмём граф, хранящийся в виде объекта (словаря) списков смежности:
// Сложность: 𝑂(𝑉+𝐸), где 𝑉 — количество вершин, 𝐸 — количество рёбер. Если граф «не слишком плотный», это можно считать почти 𝑂(𝑛) по количеству вершин и рёбер.

/**
 * Обход в ширину (BFS) в графе, представленном списками смежности.
 * @param {Object} graph - Объект вида { A: ['B','C'], B: [...], ... }
 * @param {string} start - Стартовая вершина
 * @returns {string[]} Порядок обхода вершин
 */
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];
  
    visited.add(start);
  
    while (queue.length > 0) {
      const vertex = queue.shift(); // взяли первый элемент очереди
      result.push(vertex);
  
      // перебираем всех соседей
      for (const neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  
    return result;
  }
  
  // Пример использования:
  const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
  };
  
  console.log(bfs(graph, 'A')); 
  // возможный результат: ['A', 'B', 'C', 'D', 'E', 'F']
  