import { Response, Request } from 'express';
import Post from '../models/short';
import User from '../models/user';
import { IUserId, IShort } from '../types/interfaces';



/* export const emailExists = async(email: string) => {
    const userEmail = await User.findOne({
        where:{
            email
        }
    })
    console.log(userEmail)
    if(userEmail) {
        throw new Error('El email de ese usuario ya existe');
    }
} */





