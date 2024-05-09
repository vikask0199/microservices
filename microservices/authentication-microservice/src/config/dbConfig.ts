import { DataSource } from "typeorm";
import dotenv from "dotenv";
import mysql2 from "mysql2"

dotenv.config({ path: ".env" });

export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_URL,
  driver: mysql2,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306, 
  logging: true,
  entities: ['src/models/*{.ts, .js}'],
  synchronize: true,
});

export default appDataSource;
