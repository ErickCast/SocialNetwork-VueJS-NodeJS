import dotenv from 'dotenv'
import Server from './src/models/server';

// Configurar el dotenv
dotenv.config();

const server = new Server();

server.listen();