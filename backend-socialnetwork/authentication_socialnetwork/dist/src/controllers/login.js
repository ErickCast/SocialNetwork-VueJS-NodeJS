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
exports.login = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_generate_1 = require("../helpers/jwt-generate");
const JSONResponse = (statusCode, parameters, res) => {
    return res.status(statusCode).json(parameters);
};
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.default.findOne({
            where: {
                email
            }
        });
        if (!user) {
            return JSONResponse(400, {
                message: "El email ingresado no corresponde a ningun usuario registrado, ingrese otro"
            }, res);
        }
        const passwordCompare = bcryptjs_1.default.compareSync(password, user.dataValues.password);
        if (!passwordCompare) {
            return JSONResponse(400, {
                message: "La contraseña ingresada no corresponse al correo ingresado"
            }, res);
        }
        const token = yield (0, jwt_generate_1.generarJWT)(user.dataValues.id);
        JSONResponse(200, {
            resultado: 1,
            user,
            token
        }, res);
    }
    catch (error) {
        JSONResponse(500, {
            message: "ERROR INTERNO DEL SERVIDOR, COMUNIQUESE CON EL ADMINISTRADOR",
            error
        }, res);
    }
});
exports.login = login;
//# sourceMappingURL=login.js.map