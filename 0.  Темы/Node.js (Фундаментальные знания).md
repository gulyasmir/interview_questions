### **Node.js (Фундаментальные знания)**

#### **1. Основы работы с Node.js**

* Event Loop, потоки, асинхронность
* Работа с `fs`, `path`, `os`, `events`, `stream`
* Подходы к многопоточности: Worker Threads, Cluster
* Асинхронные операции: `async/await`, Promises, `process.nextTick()`, `setImmediate()`
* NPM/Yarn: управление зависимостями
* Логирование (winston, pino)
* Конфигурация через `.env`, `dotenv`

#### **2. HTTP-сервер и API**

* Express, Koa, Fastify
* Middleware, маршрутизация, обработка ошибок
* REST API: лучшие практики
* GraphQL (Apollo, Mercurius)
* WebSockets (Socket.io, ws)
* gRPC

#### **3. Базы данных**

* NoSQL (MongoDB, Redis)
* SQL (PostgreSQL, MySQL)
* ORM и query builders (Prisma, TypeORM, Knex)
* Индексы, нормализация, транзакции
* Кэширование (Redis, Memcached)

#### **4. Безопасность**

* Авторизация: JWT, OAuth2, Passport.js
* Хеширование паролей (`bcrypt`, `argon2`)
* Защита от атак: CSRF, XSS, SQL Injection
* CORS, Helmet, rate limiting

#### **5. Архитектурные подходы**

* Монолит vs. Микросервисы
* CQRS, Event Sourcing
* Layered Architecture, Hexagonal Architecture
* GraphQL vs REST API
* WebSockets + Redis Pub/Sub

#### **6. Тестирование**

* Unit-тесты (Jest, Mocha, Chai)
* Интеграционные тесты
* e2e (Supertest, Cypress)
* Mocking, Test-driven development (TDD)
