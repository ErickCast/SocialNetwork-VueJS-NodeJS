"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Short = connection_1.default.define('shorts_socialnetwork', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER // Cambiado a INTEGER
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT
    },
    nombre_archivo: {
        type: sequelize_1.DataTypes.TEXT
    },
    esprivado: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    fecha_alta: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: (0, sequelize_1.literal)('CURRENT_TIMESTAMP')
    },
    fecha_actualizacion: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: (0, sequelize_1.literal)('CURRENT_TIMESTAMP')
    }
}, {
    freezeTableName: true,
    timestamps: false,
});
exports.default = Short;
//# sourceMappingURL=short.js.map