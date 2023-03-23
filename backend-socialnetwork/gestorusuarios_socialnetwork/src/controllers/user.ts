import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import User from '../models/user';
import { Op } from "sequelize"

interface IUser {
    name: string;
    last_names:string;
    email:string;
    username: string;
    password: string;
}

const JSONResponse: any = (statusCode: number, parameters:{}, res:Response) => {
    return res.status(statusCode).json(parameters);
}

export const getUserById = async(req: Request, res: Response) => {
    const {id}= req.params; 
    try {
        const user = await User.findByPk( id );
        if( user ) {
            JSONResponse(200, user, res);
        }else {
            return JSONResponse(404, {
                msg: 'No se encontro ningun usuario'
            }, res);
        }
    }catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar obtener el usuario por id',
            error
        }, res)
    }
}

export const getUserByName = async(req: Request, res: Response) => {
    const {name}= req.body; 
    try {
        const user = await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });
        if( user ) {
            JSONResponse(200, user, res)
        }else {
            return JSONResponse(404, {
                msg: 'No se encontro ningun usuario'
            }, res);
        }
    }catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar buscar al usuario por nombre',
            error
        }, res)
    }
}


export const registerUser = async(req: Request, res: Response) => {
    const user: IUser= req.body; 
    try {
        const userAdd = await User.create({...user})
        if( userAdd ) {
            JSONResponse(200, {
                message: '¡Usuario registrado!',
                newUser: userAdd
            }, res)
        }else {
            return JSONResponse(400, {
                msg: 'No se pudo insertar al usuario'
            }, res);
        }
    }catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar registrar al usuario',
            error
        }, res)
    }
}


export const putUser = async(req: Request, res: Response) => {
    const {id}= req.params;
    const user: IUser   = req.body;
    try{
        let getUserEmail = await User.findOne({
            where:{
                email: user.email,
                id: {
                    [Op.notIn]: [id]
                }
            }
        })
        if(getUserEmail){
            return JSONResponse(400, {
                msg: "El email ingresado para actualizar ya existe, ingrese otro que no exista"
            }, res)
        }
        const userUpdated = await User.update( user, {
            where: {
                id
            }
        });
        if( userUpdated ) {
            JSONResponse(200, {
                message: '¡Usuario actualizado!',
                newUser: user
            }, res)
        }else {
            return JSONResponse(400, {
                msg: 'No se pudo actualizar al usuario'
            }, res);
        }

    } catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar actualizar al usuario',
            error
        }, res)
    }

}

export const deleteUser = async(req: Request, res: Response) => {
    const {id}= req.params; 
    try {
        const userDeleted = await User.destroy({
            where:{
                id
            }
        });
        if( userDeleted ) {
            JSONResponse(200, {
                message: '¡Usuario eliminado!',
                userDeleted
            }, res)
        }else {
            return JSONResponse(404, {
                msg: 'No se encontro ningun usuario'
            }, res);
        }
    }catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar obtener el usuario por id',
            error
        }, res)
    }
}

