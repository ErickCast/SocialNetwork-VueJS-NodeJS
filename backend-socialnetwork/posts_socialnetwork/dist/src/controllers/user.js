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
exports.deleteUser = exports.putUser = exports.registerUser = exports.getUserByName = exports.getUserById = void 0;
const user_1 = __importDefault(require("../models/user"));
const sequelize_1 = require("sequelize");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const JSONResponse = (statusCode, parameters, res) => {
    return res.status(statusCode).json(parameters);
};
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id);
        if (user) {
            JSONResponse(200, user, res);
        }
        else {
            return JSONResponse(404, {
                msg: 'No se encontro ningun usuario'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar obtener el usuario por id',
            error
        }, res);
    }
});
exports.getUserById = getUserById;
const getUserByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const user = yield user_1.default.findAll({
            where: {
                name: {
                    [sequelize_1.Op.like]: `%${name}%`
                }
            }
        });
        if (user) {
            JSONResponse(200, user, res);
        }
        else {
            return JSONResponse(404, {
                msg: 'No se encontro ningun usuario'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar buscar al usuario por nombre',
            error
        }, res);
    }
});
exports.getUserByName = getUserByName;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const salt = bcryptjs_1.default.genSaltSync();
        user.password = bcryptjs_1.default.hashSync(user.password, salt);
        console.log(Object.assign({}, user));
        const userAdd = yield user_1.default.create(Object.assign({}, user));
        if (userAdd) {
            JSONResponse(200, {
                message: '¡Usuario registrado!',
                newUser: userAdd
            }, res);
        }
        else {
            return JSONResponse(400, {
                msg: 'No se pudo insertar al usuario'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar registrar al usuario',
            error
        }, res);
    }
});
exports.registerUser = registerUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.body;
    try {
        let getUserEmail = yield user_1.default.findOne({
            where: {
                email: user.email,
                id: {
                    [sequelize_1.Op.notIn]: [id]
                }
            }
        });
        if (getUserEmail) {
            return JSONResponse(400, {
                msg: "El email ingresado para actualizar ya existe, ingrese otro que no exista"
            }, res);
        }
        const salt = bcryptjs_1.default.genSaltSync();
        user.password = bcryptjs_1.default.hashSync(user.password, salt);
        const userUpdated = yield user_1.default.update(user, {
            where: {
                id
            }
        });
        if (userUpdated) {
            JSONResponse(200, {
                message: '¡Usuario actualizado!',
                newUser: user
            }, res);
        }
        else {
            return JSONResponse(400, {
                msg: 'No se pudo actualizar al usuario'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar actualizar al usuario',
            error
        }, res);
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userDeleted = yield user_1.default.destroy({
            where: {
                id
            }
        });
        if (userDeleted) {
            JSONResponse(200, {
                message: '¡Usuario eliminado!',
                userDeleted
            }, res);
        }
        else {
            return JSONResponse(404, {
                msg: 'No se encontro ningun usuario'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar obtener el usuario por id',
            error
        }, res);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map