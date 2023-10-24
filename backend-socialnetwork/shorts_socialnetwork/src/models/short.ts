import {DataTypes, literal} from 'sequelize';
import db from '../database/connection';
import sequelize from 'sequelize';

const Short = db.define('shorts_socialnetwork', {
    id: {
        type: DataTypes.INTEGER, // Cambiado a INTEGER
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER // Cambiado a INTEGER
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    nombre_archivo: {
        type: DataTypes.TEXT
    },
    esprivado: {
        type: DataTypes.BOOLEAN
    },
    fecha_alta: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP')
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP')
    }
    
}, {
    freezeTableName: true,
    timestamps: false,
});

export default Short;
