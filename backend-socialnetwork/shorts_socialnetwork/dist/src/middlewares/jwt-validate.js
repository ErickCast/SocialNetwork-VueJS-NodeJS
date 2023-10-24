"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const structure_1 = __importDefault(require("../config/structure"));
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        });
    }
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, structure_1.default.JWT_PRIVATEKEY);
        const usuario = yield user_1.default.findByPk(uid);
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en DB'
            });
        }
        req.body.usuario = usuario;
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token no valido'
        });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=jwt-validate.js.map