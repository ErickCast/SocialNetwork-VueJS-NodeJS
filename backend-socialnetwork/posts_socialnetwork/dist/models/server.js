"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const structure_1 = __importDefault(require("../config/structure"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = structure_1.default.APP_AUTHENTICATION_SOCIALNETWORK_PORT || 3000;
    }
    //MIDDLEWARES
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map