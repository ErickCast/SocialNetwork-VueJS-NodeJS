import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import User from '../models/user';
import { Op } from "sequelize"

interface iUser {
    name: string;
    last_names:string;
    email:string;
    username: string;
    password: string;
}

export const getUser = async(req: Request, res: Response) => {
    const {id}= req.params; 

    const user = await User.findByPk( id );
    if( user ) {
        res.json(user);
    }else {
        return res.status(404).json({
            msg: 'No se encontro ningun usuario'
        })
    }
}

export const searchUser = async(req: Request, res: Response) => {
    const {name}= req.body; 

    const user = await User.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        }
    });
    if( user ) {
        res.json(user);
    }else {
        return res.status(404).json({
            msg: 'No se encontro ningun usuario'
        })
    }
}


export const registerUser = async(req: Request, res: Response) => {
    const user: iUser= req.body; 

    const userAdd = await User.create({...user})
    if( userAdd ) {
        res.json(user);
    }else {
        return res.status(404).json({
            msg: 'No se inserto ningun usuario'
        })
    }
}
