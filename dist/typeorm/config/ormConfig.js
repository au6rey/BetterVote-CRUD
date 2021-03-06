"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const config = {
    type: "postgres",
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    entities: ["dist/typeorm/entities/**/*.ts"],
    migrations: ["src/typeorm/migrations/**/*.ts"],
    subscribers: ["src/typeorm/subscriber/**/*.ts"],
    cli: {
        entitiesDir: "src/typeorm/entities",
        migrationsDir: "src/typeorm/migrations",
        subscribersDir: "src/typeorm/subscriber",
    },
    // dropSchema: true,
    logging: true,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.default = config;
//# sourceMappingURL=ormConfig.js.map