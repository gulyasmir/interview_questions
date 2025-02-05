// Функция для выбора пары токенов для свапа
function selectTokensForSwap(walletTokens, preferredPairs) {
    /**
     * walletTokens: массив токенов, доступных в кошельке пользователя
     * preferredPairs: массив предпочтительных пар токенов (например, [['ETH', 'USDT'], ['BTC', 'ETH']])
     *
     * Возвращает: пару токенов для свапа или null, если пара не найдена
     */
  
    // Проверяем, есть ли в кошельке токены из предпочтительных пар
    for (let pair of preferredPairs) {
      const [tokenA, tokenB] = pair;
  
      // Проверяем, есть ли оба токена из пары в кошельке
      if (walletTokens.includes(tokenA) && walletTokens.includes(tokenB)) {
        return pair; // Возвращаем первую подходящую пару
      }
    }
  
    // Если предпочтительные пары не найдены, выбираем случайную пару из доступных токенов
    if (walletTokens.length >= 2) {
      const randomPair = [
        walletTokens[Math.floor(Math.random() * walletTokens.length)],
        walletTokens[Math.floor(Math.random() * walletTokens.length)],
      ];
  
      // Убедимся, что это не один и тот же токен
      while (randomPair[0] === randomPair[1]) {
        randomPair[1] = walletTokens[Math.floor(Math.random() * walletTokens.length)];
      }
  
      return randomPair;
    }
  
    // Если в кошельке недостаточно токенов для свапа, возвращаем null
    return null;
  }
  
  // Пример использования:
  const walletTokens = ['ETH', 'BTC', 'USDT', 'DAI'];
  const preferredPairs = [
    ['ETH', 'USDT'],
    ['BTC', 'ETH'],
    ['USDC', 'DAI'],
  ];
  
  const selectedPair = selectTokensForSwap(walletTokens, preferredPairs);
  console.log('Выбранная пара токенов для свапа:', selectedPair);
  