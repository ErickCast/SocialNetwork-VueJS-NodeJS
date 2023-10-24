"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const Short = connection_1.default.define('shorts_socialnetwork', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING
    },
    nombre_archivo: {
        type: DataTypes.STRING
    },
    fecha_alta: {
        type: DataTypes.DATE
    },
    fecha_actualizacion: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true,
    timestamps: false
});
exports.default = Short;
//# sourceMappingURL=post.js.map