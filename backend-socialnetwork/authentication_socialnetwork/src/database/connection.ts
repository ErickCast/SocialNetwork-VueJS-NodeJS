import { Sequelize } from "sequelize";

import structure from "../config/structure";

interface IDBConnection {
    dialect: string;
    host: string;
    port: number;
    database: string;
    username: string;
    password: string;
}

const DBConnection: IDBConnection = {
    dialect: "postgres",
    host: structure.DB_HOST,
    port: structure.DB_PORT,
    database: structure.DB_NAME,
    username: structure.DB_USER,
    password: structure.DB_PASSWORD

}
const db: Sequelize = new Sequelize({
    dialect: "postgres",
    host: DBConnection.host,
    port: DBConnection.port,
    database: DBConnection.database,
    username: DBConnection.username,
    password: DBConnection.password
  });
export default db;