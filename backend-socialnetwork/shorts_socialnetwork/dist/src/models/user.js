"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = __importDefault(require("../database/connection"));
const User = connection_1.default.define('usuarios_socialnetwork', {
    name: {
        type: sequelize_1.default.STRING
    },
    last_names: {
        type: sequelize_1.default.STRING
    },
    email: {
        type: sequelize_1.default.STRING
    },
    username: {
        type: sequelize_1.default.STRING
    },
    tipo_usuario: {
        type: sequelize_1.default.INTEGER
    },
    password: {
        type: sequelize_1.default.STRING
    },
    fecha_alta: {
        type: sequelize_1.default.DATE
    },
    fecha_actualizacion: {
        type: sequelize_1.default.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = User;
//# sourceMappingURL=user.js.map