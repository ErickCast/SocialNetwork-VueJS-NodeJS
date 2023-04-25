"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const structure_1 = __importDefault(require("../config/structure"));
const DBConnection = {
    dialect: "postgres",
    host: structure_1.default.DB_HOST,
    port: structure_1.default.DB_PORT,
    database: structure_1.default.DB_NAME,
    username: structure_1.default.DB_USER,
    password: structure_1.default.DB_PASSWORD
};
const db = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: DBConnection.host,
    port: DBConnection.port,
    database: DBConnection.database,
    username: DBConnection.username,
    password: DBConnection.password
});
exports.default = db;
//# sourceMappingURL=connection.js.map