import { DataTypes } from 'sequelize';
import db from '../database/connection';

const User = db.define('usuarios_socialnetwork', {
    name: {
        type: DataTypes.STRING
    },
    last_names: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    tipo_usuario: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING
    },
    fecha_alta: {
        type: DataTypes.DATE
    },
    fecha_actualizacion: {
        type: DataTypes.DATE
    }

    
    
},{
    freezeTableName: true,
    timestamps: false
})

export default User;