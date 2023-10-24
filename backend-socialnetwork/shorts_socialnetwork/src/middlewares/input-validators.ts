import { Request, Response, NextFunction } from "express";
import fs from 'fs';
import path from 'path';

import ffprobe from 'ffprobe';
import ffprobeStatic from 'ffprobe-static';
import { saveVideoInDirectory } from '../routes/shorts';

export const validateVideo = async (req: Request, res: Response, next: NextFunction) => {
    const videosPath = 'uploads/';
    let ultimoArchivo = '';

    try {
        const archivos = await fs.promises.readdir(videosPath);

        if (archivos.length > 0) {
            ultimoArchivo = archivos
                .map((archivo) => ({
                    nombre: archivo,
                    fechaModificacion: fs.statSync(path.join(videosPath, archivo)).mtime,
                }))
                .sort((a, b) => Number(b.fechaModificacion) - Number(a.fechaModificacion))[0].nombre;

            const info = await new Promise<{ streams: { duration: number }[] }>((resolve, reject) => {
                ffprobe(videosPath + ultimoArchivo, { path: ffprobeStatic.path }, (err, info:any) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });

            const videoDuration = info.streams[0].duration;

            if (videoDuration > 30) {
                await fs.promises.unlink(videosPath + ultimoArchivo);
                return res.status(406).json({
                    msg: 'Error, El video no puede durar más de 30 segundos',
                });
            }
        }

        next();
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al validar el video',
            error: error,
        });
    }
};