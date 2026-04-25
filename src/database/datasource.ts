import { DataSource } from "typeorm";
import dotenv from "dotenv";
import Book from "./entities/book.entity.js";
import User from "./entities/user.entity.ts";
import Category from "./entities/category.entity.ts";
dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'test',
    entities: [Book, User, Category],
    synchronize: true,
    logging: true,
})

export default AppDataSource
