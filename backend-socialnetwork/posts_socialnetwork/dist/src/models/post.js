"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Post = connection_1.default.define('posts_socialnetwork', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true
    },
    usuario_id: {
        type: sequelize_1.DataTypes.NUMBER
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    archivo: {
        type: sequelize_1.DataTypes.STRING
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
exports.default = Post;
//# sourceMappingURL=post.js.map