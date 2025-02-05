class Database {
    constructor() {
        this.dbConnection = null; // Хранит Promise подключения
        this.isConnecting = false; // Флаг для предотвращения повторного подключения
    }

    // Метод для инициализации подключения
    async init() {
        if (this.dbConnection) {
            // Подключение уже существует или в процессе
            return await this.dbConnection; // Возвращаем существующее подключение
        }

        if (this.isConnecting) {
            // Если подключение в процессе, ждем его завершения
            return await this.dbConnection;
        }

        // Устанавливаем флаг и создаем Promise подключения
        this.isConnecting = true;

        this.dbConnection = new Promise((resolve, reject) => {
            console.log("Устанавливается подключение к базе данных...");
            setTimeout(() => {
                console.log("Подключение установлено.");
                resolve("Соединение с базой данных"); // Здесь может быть объект реального соединения
            }, 2000);
        });

        try {
            return await this.dbConnection; // Ждем завершения подключения
        } finally {
            this.isConnecting = false; // Сбрасываем флаг
        }
    }

    // Метод для выполнения запросов
    async execute(query) {
        if (!this.dbConnection) {
            throw new Error("Подключение к базе данных не было инициализировано. Вызовите init().");
        }

        // Ждем завершения подключения
        const connection = await this.dbConnection;

        // Выполняем запрос (здесь симуляция)
        console.log(`Выполняем запрос: ${query}`);
        return `Результат запроса: ${query}`;
    }
}

// Пример использования
(async () => {
    const db = new Database();

    // Одновременно вызываем init и execute
    const connectPromise = db.init(); // Начинаем подключение
    const query1Promise = db.execute("SELECT * FROM users;");
    const query2Promise = db.execute("SELECT * FROM products;");

    // Ожидаем завершения запросов
    console.log(await connectPromise); // Соединение установлено
    console.log(await query1Promise); // Выполнен запрос
    console.log(await query2Promise); // Выполнен запрос
})();
