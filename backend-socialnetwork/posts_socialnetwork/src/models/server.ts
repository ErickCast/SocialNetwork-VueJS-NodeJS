import express, { Application } from 'express';
import cors from 'cors';
import db from '../database/connection';
import postRoutes from '../routes/posts'

import structure from '../config/structure';



class Server {

    private app: Application;
    private port: number;

    constructor() {
        this.app = express()
        this.port = structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_PORT || 3002;
        this.DBConnection();
        this.middlewares();
        this.routes();
    }
    //MIDDLEWARES

    async DBConnection() {
        try {
            await db.authenticate();
            console.log("Database online")
        } catch (error){
            console.log("No se pudo conectar: " + error)
        }

    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use(express.static('public'));
        
    }

    routes() {
        this.app.use('/api/post', postRoutes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto '+this.port);
        })
    }
}

export default Server;