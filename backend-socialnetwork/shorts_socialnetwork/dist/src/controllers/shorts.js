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
exports.uploadShort = exports.deleteShort = exports.updateShortDescripcion = exports.getShortsByUser = exports.getShortById = exports.getShortByDescription = exports.getAllShorts = void 0;
const short_1 = __importDefault(require("../models/short"));
const sequelize_1 = require("sequelize");
const JSONResponse = (statusCode, parameters, res) => {
    return res.status(statusCode).json(parameters);
};
const getAllShorts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shorts = yield short_1.default.findAll();
        return JSONResponse(200, shorts, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener todos los shorts",
            error
        }, res);
    }
});
exports.getAllShorts = getAllShorts;
const getShortByDescription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.body;
    try {
        const shorts = yield short_1.default.findAll({
            where: {
                descripcion: {
                    [sequelize_1.Op.like]: `%${descripcion}%`
                }
            }
        });
        return JSONResponse(200, shorts, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener los shorts",
            error
        }, res);
    }
});
exports.getShortByDescription = getShortByDescription;
const getShortById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const shorts = yield short_1.default.findByPk(id);
        return JSONResponse(200, shorts, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener el short",
            error
        }, res);
    }
});
exports.getShortById = getShortById;
const getShortsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id } = req.body;
    try {
        const shorts = yield short_1.default.findAll({
            where: {
                id_usuario: user_id
            }
        });
        return JSONResponse(200, shorts, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener los shorts por usuario",
            error
        }, res);
    }
});
exports.getShortsByUser = getShortsByUser;
const updateShortDescripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const short = req.body;
    try {
        const shortUpdated = yield short_1.default.update({
            descripcion: short.descripcion
        }, {
            where: {
                id
            }
        });
        if (shortUpdated) {
            return JSONResponse(200, {
                message: "¡Short actualizado!",
                newShort: short
            }, res);
        }
        else {
            return JSONResponse(400, {
                msg: 'No se pudo actualizar el short'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar actualizar el short",
            error
        }, res);
    }
});
exports.updateShortDescripcion = updateShortDescripcion;
const deleteShort = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const shorts = yield short_1.default.destroy({
            where: {
                id
            }
        });
        return JSONResponse(200, {
            msg: "¡Short eliminado!"
        }, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar borrar el short",
            error
        }, res);
    }
});
exports.deleteShort = deleteShort;
const uploadShort = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const short = req.body;
    try {
        const shortAdd = yield short_1.default.create(Object.assign({}, short));
        if (shortAdd) {
            return JSONResponse(200, {
                message: "¡Short creado!",
                newShort: req.body
            }, res);
        }
        else {
            return JSONResponse(400, {
                msg: 'No se pudo insertar el short'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar guardar el short",
            error
        }, res);
    }
});
exports.uploadShort = uploadShort;
//# sourceMappingURL=shorts.js.map