"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const User = connection_1.default.define('usuarios_socialnetwork', {
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_names: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    username: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    tipo_usuario: {
        type: sequelize_1.DataTypes.INTEGER
    },
    fecha_alta: {
        type: sequelize_1.DataTypes.DATE
    },
    fecha_actualizacion: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = User;
//# sourceMappingURL=user.js.map