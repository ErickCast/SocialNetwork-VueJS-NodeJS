import User from '../models/user';

export const emailExists = async(email: string) => {
    const userEmail = await User.findOne({
        where:{
            email
        }
    })
    console.log(userEmail)
    if(userEmail) {
        throw new Error('El email de ese usuario ya existe');
    }
}