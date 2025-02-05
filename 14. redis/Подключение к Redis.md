Подключение Redis в Node.js и основные методы


#### **1. Установка библиотеки Redis**

Устанавливаем пакет `ioredis` (лучший вариант для продакшена) или `redis` (официальный клиент).

```
npm install ioredis

```


#### **2. Подключение к Redis**

</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"></div></div></pre>

```
const Redis = require('ioredis');

const redis = new Redis({
  host: '127.0.0.1',  // Адрес сервера Redis
  port: 6379,         // Порт Redis
  password: 'yourpassword',  // Если установлен пароль
  db: 0,             // Номер базы (по умолчанию 0)
});

redis.on('connect', () => console.log('Connected to Redis'));
redis.on('error', (err) => console.error('Redis error', err));

```


### **Основные методы Redis в Node.js**

#### **Работа с ключами

**
