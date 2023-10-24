import { Request, Response } from 'express';
import Short from '../models/short';
import { Op, where } from "sequelize"
import { IShort } from '../types/interfaces';


const JSONResponse: any = (statusCode: number, parameters:{}, res:Response) => {
    return res.status(statusCode).json(parameters);
}

export const getAllShorts = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    try {
        const shorts = await Short.findAll();
        return JSONResponse(200, shorts, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener todos los shorts",
            error
        }, res)
    }
}

export const getShortByDescription = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { descripcion } = req.body;
    try {
        const shorts = await Short.findAll({
            where: {
                descripcion: {
                    [Op.like]: `%${descripcion}%`
                }
            }
        });

        return JSONResponse(200, shorts, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener los shorts",
            error
        }, res)
    }
} 

export const getShortById = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { id } = req.params;
    try {
        const shorts = await Short.findByPk(id);
        return JSONResponse(200, shorts, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener el short",
            error
        }, res)
    }
}

export const getShortsByUser = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { user_id } = req.body;
    try {
        const shorts = await Short.findAll({
            where:{
                id_usuario: user_id
            }
        });
        return JSONResponse(200, shorts, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener los shorts por usuario",
            error
        }, res)
    }
}



export const updateShortDescripcion = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { id } = req.params;
    const short:IShort = req.body;
    try {
        const shortUpdated = await Short.update( {
            descripcion: short.descripcion
        }, {
            where: {
                id
            }
        });
        if(shortUpdated){
            return JSONResponse(200, {
                message: "¡Short actualizado!",
                newShort: short
            }, res)
        }else {
            return JSONResponse(400, {
                msg: 'No se pudo actualizar el short'
            }, res);
        }
        
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar actualizar el short",
            error
        }, res)
    }
} 


export const deleteShort = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
    const { id } = req.params;
    try {
        const shorts = await Short.destroy({
            where:{
                id
            }
        });
        return JSONResponse(200, {
            msg: "¡Short eliminado!"
        }, res)
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar borrar el short",
            error
        }, res)
    }
}


export const uploadShort = async(req: Request, res: Response) => {
    const short:IShort = req.body;
    try {
        const shortAdd = await Short.create({...short});
        if(shortAdd){
            return JSONResponse(200, {
                message: "¡Short creado!",
                newShort: req.body
            }, res)
        }else {
            return JSONResponse(400, {
                msg: 'No se pudo insertar el short'
            }, res);
        }
        
    } catch(error) {
        return JSONResponse(500, {
            msg: "Error al intentar guardar el short",
            error
        }, res)
    }
      

}
