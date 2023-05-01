import { Response, Request } from 'express';
import Post from '../models/post';
import User from '../models/user';
import { IPost, IUserId } from '../types/interfaces';



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

export const userOwnPost = async(req: Request, res: Response, next:any) => {
    let { usuario } = req.body; 
    console.log(req.params.id);
    console.log(usuario.id)
    console.log('Este es el body de la peticion: ', req.body)
    const userPost = await Post.findOne({
        where: {
            id: req.params.id,
            usuario_id: usuario.id
        }
    });

    if(!userPost) {
        return res.status(401).json({
            msg: "El usuario debe ser el dueño del post para realizar alguna accion con este"
        })
    }

    next();
}

export const postExists = async(req: Request, res: Response, next:any) => {
    const post = await Post.findOne({
        where:{
            id : req.params.id
        }
    })
    if(!post) {
        return res.status(404).json({
            msg: "Esa publicacion no existe!"
        })
    }
    next();
}

export const checkIfPostIsEmpty = async(req: Request, res: Response, next:any) => {
    const post: IPost = req.body;
    if(post.archivo === "" && post.descripcion === "") {
        return res.status(406).json({
            msg: "La publicacion no puede subirse vacia, por favor, agreguele contenido!"
        })
    }
    next();
}



