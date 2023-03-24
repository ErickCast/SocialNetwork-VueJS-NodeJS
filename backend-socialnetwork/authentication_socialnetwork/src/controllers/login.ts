
import { Request, Response } from "express";
import User from "../models/user";
import bcryptjs from 'bcryptjs'
import { generarJWT } from "../helpers/jwt-generate";
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

export const login = async(req:Request, res:Response) => {
    const { email, password }: {email:string, password: string} = req.body;

    try {
        const user: any = await User.findOne({
            where: {
                email
            }
        })
        if(!user) {
            return JSONResponse(400, {
                message: "El email ingresado no corresponde a ningun usuario registrado, ingrese otro"
            }, res)
        }
        const passwordCompare: boolean = bcryptjs.compareSync(password, user.dataValues.password) 
        if(!passwordCompare){
            return JSONResponse(400, {
                message: "La contraseña ingresada no corresponse al correo ingresado"
            }, res)
        }
    
        const token:any = await generarJWT(user.dataValues.id)
        JSONResponse(200, {
            resultado: 1,
            user,
            token
        }, res)
    } catch(error) {
        JSONResponse(500, {
            message:"ERROR INTERNO DEL SERVIDOR, COMUNIQUESE CON EL ADMINISTRADOR",
            error
        }, res)
    }

}
