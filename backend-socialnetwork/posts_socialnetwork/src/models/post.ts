import { DATE, DataTypes } from 'sequelize';
import db from '../database/connection';

const Post = db.define('posts_socialnetwork', {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    usuario_id: {
        type: DataTypes.NUMBER
    },
    descripcion: {
        type: DataTypes.STRING
    },
    archivo: {
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

export default Post;