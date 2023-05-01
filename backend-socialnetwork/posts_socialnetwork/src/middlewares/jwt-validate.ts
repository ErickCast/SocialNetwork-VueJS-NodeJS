import { Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import structure from '../config/structure';

interface IJWTTypesVerify {
    uid: string,
    lat: number,
    exp:number
}

export const validateJWT = async(req: Request, res: Response, next:any ) => {
    const token: string | undefined = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }

    try {
        const { uid } = jwt.verify(token, structure.JWT_PRIVATEKEY) as IJWTTypesVerify;

        const usuario = await User.findByPk(uid);
        if(!usuario) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            });
        }

        req.body.usuario = usuario;
        next();
    } catch(error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no valido'
        });
    }

}