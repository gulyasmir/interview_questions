function handleTokenActions(walletTokens, preferredPairs, transferLimit = { min: 1, max: 3 }) {
    let transferCount = 0; // Счетчик трансферов подряд
  
    return function (actionType) {
      if (actionType === 'swap') {
        const swapPair = selectTokensForSwap(walletTokens, preferredPairs);
        if (!swapPair) {
          return 'Недостаточно токенов для свапа.';
        }
  
        transferCount = 0; // Обнуляем счетчик трансферов после свапа
        return `Свап выполнен: ${swapPair[0]} на ${swapPair[1]}`;
      }
  
      if (actionType === 'transfer') {
        if (transferCount >= transferLimit.max) {
          return `Достигнуто максимальное количество трансферов подряд (${transferLimit.max}). Выполните другое действие.`;
        }
  
        // Выполняем трансфер
        const transferableToken = walletTokens[0]; // Берем первый токен для трансфера
        if (!transferableToken) {
          return 'Нет доступных токенов для трансфера.';
        }
  
        transferCount++;
        return `Трансфер выполнен с токеном: ${transferableToken}. Количество трансферов подряд: ${transferCount}`;
      }
  
      return 'Неизвестное действие.';
    };
  }
  
  // Пример использования:
  const walletTokens = ['ETH', 'BTC', 'USDT', 'DAI'];
  const preferredPairs = [['ETH', 'USDT'], ['BTC', 'ETH'], ['USDC', 'DAI']];
  const actionHandler = handleTokenActions(walletTokens, preferredPairs, { min: 1, max: 3 });
  
  console.log(actionHandler('swap'));     // Выполняет свап
  console.log(actionHandler('transfer')); // Выполняет трансфер
  console.log(actionHandler('transfer')); // Выполняет еще один трансфер
  console.log(actionHandler('transfer')); // Достигнуто ограничение на 3 трансфера подряд
  console.log(actionHandler('swap'));     // Выполняет свап, обнуляет счетчик трансферов
  console.log(actionHandler('transfer')); // Снова разрешен трансфер
  