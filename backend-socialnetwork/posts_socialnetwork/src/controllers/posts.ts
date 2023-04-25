import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Post from '../models/post';
import { Op } from "sequelize"
import bcryptjs from 'bcryptjs'

interface IPost {
    usuario_id:  number;
    descripcion: string;
    archivo:     string;
}

const JSONResponse: any = (statusCode: number, parameters:{}, res:Response) => {
    return res.status(statusCode).json(parameters);
}


export const getAllPosts = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const posts = await Post.findAll();
        return JSONResponse(200, posts, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener todas las publicaciones",
            error
        }, res)
    }
}

export const getPostById = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);

        if(!post) return JSONResponse(404, {
            msg: `El post con id ${id} no existe`,
            post: []
        }, res)

        return JSONResponse(200, post, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener una publicacion por su id",
            error
        }, res)
    }
}

export const getPostByUser = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { usuario_id } = req.params;
    try {
        const post = await Post.findAll({
            where: {
                usuario_id: {
                    [Op.in]: [usuario_id]
                }
            }
        });
        if(post.length == 0) return JSONResponse(404, {
            msg: `No hay ningun post del usuario con el id ${usuario_id}`,
            posts: []
        }, res)
        return JSONResponse(200, post, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener una publicacion por su usuario",
            error
        }, res)
    }
}


export const getPostByDescription = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { descripcion } = req.body;
    try {
        const post = await Post.findAll({
            where: {
                descripcion: {
                    [Op.like]: `%${descripcion}%`
                }
            }
        });
        if(post.length == 0) return JSONResponse(404, {
            msg: `No hay ningun post con esa descripcion`,
            posts: []
        }, res)
        return JSONResponse(200, post, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener una publicacion por su descripcion",
            error
        }, res)
    }
}

export const registerPost = async(req: Request, res: Response) => {
    const post: IPost= req.body; 
    try {
        
        const postAdd = await Post.create({...post})
        if( postAdd ) {
            JSONResponse(200, {
                message: '¡Publicacion registrada!',
                newUser: postAdd
            }, res)
        }else {
            return JSONResponse(400, {
                msg: 'No se pudo insertar la publicacion'
            }, res);
        }
    }catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar registrar al usuario',
            error
        }, res)
    }
}


export const putPost = async(req: Request, res: Response) => {
    const {id}= req.params;
    const post: IPost = req.body;
    try{
        const existsPost = await Post.findByPk(id);
        if(!existsPost) return JSONResponse(400, {
            msg: 'La publicacion que quieres actualizar no existe'
        }, res);
        const userUpdated = await Post.update( {descripcion: post.descripcion, archivo: post.archivo}, {
            where: {
                id
            }
        });
        if( userUpdated ) {
            JSONResponse(200, {
                message: '¡Publicacion actualizado!',
                newPost: post
            }, res)
        }else {
            return JSONResponse(400, {
                msg: 'No se pudo actualizar la publicacion'
            }, res);
        }

    } catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar actualizar la publicacion',
            error
        }, res)
    }

}

export const deletePost = async(req: Request, res: Response) => {
    const {id}= req.params; 
    try {
        const existsPost = await Post.findByPk(id);
        if(!existsPost) return JSONResponse(400, {
            msg: 'La publicacion que quieres actualizar no existe'
        }, res);
        const postDeleted = await Post.destroy({
            where:{
                id
            }
        });
        if( postDeleted ) {
            JSONResponse(200, {
                message: '¡Publicacion eliminada!',
                postDeleted
            }, res)
        }else {
            return JSONResponse(404, {
                msg: 'No se encontro ninguna publicacion'
            }, res);
        }
    }catch(error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar borrar la publicacion',
            error
        }, res)
    }
}





