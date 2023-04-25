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
exports.deletePost = exports.putPost = exports.registerPost = exports.getPostByDescription = exports.getPostByUser = exports.getPostById = exports.getAllPosts = void 0;
const post_1 = __importDefault(require("../models/post"));
const sequelize_1 = require("sequelize");
const JSONResponse = (statusCode, parameters, res) => {
    return res.status(statusCode).json(parameters);
};
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_1.default.findAll();
        return JSONResponse(200, posts, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener todas las publicaciones",
            error
        }, res);
    }
});
exports.getAllPosts = getAllPosts;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield post_1.default.findByPk(id);
        if (!post)
            return JSONResponse(404, {
                msg: `El post con id ${id} no existe`,
                post: []
            }, res);
        return JSONResponse(200, post, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener una publicacion por su id",
            error
        }, res);
    }
});
exports.getPostById = getPostById;
const getPostByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario_id } = req.params;
    try {
        const post = yield post_1.default.findAll({
            where: {
                usuario_id: {
                    [sequelize_1.Op.in]: [usuario_id]
                }
            }
        });
        if (post.length == 0)
            return JSONResponse(404, {
                msg: `No hay ningun post del usuario con el id ${usuario_id}`,
                posts: []
            }, res);
        return JSONResponse(200, post, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener una publicacion por su usuario",
            error
        }, res);
    }
});
exports.getPostByUser = getPostByUser;
const getPostByDescription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.body;
    try {
        const post = yield post_1.default.findAll({
            where: {
                descripcion: {
                    [sequelize_1.Op.like]: `%${descripcion}%`
                }
            }
        });
        if (post.length == 0)
            return JSONResponse(404, {
                msg: `No hay ningun post con esa descripcion`,
                posts: []
            }, res);
        return JSONResponse(200, post, res);
    }
    catch (error) {
        return JSONResponse(500, {
            msg: "Error al intentar obtener una publicacion por su descripcion",
            error
        }, res);
    }
});
exports.getPostByDescription = getPostByDescription;
const registerPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    try {
        const postAdd = yield post_1.default.create(Object.assign({}, post));
        if (postAdd) {
            JSONResponse(200, {
                message: '¡Publicacion registrada!',
                newUser: postAdd
            }, res);
        }
        else {
            return JSONResponse(400, {
                msg: 'No se pudo insertar la publicacion'
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
exports.registerPost = registerPost;
const putPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = req.body;
    try {
        const existsPost = yield post_1.default.findByPk(id);
        if (!existsPost)
            return JSONResponse(400, {
                msg: 'La publicacion que quieres actualizar no existe'
            }, res);
        const userUpdated = yield post_1.default.update({ descripcion: post.descripcion, archivo: post.archivo }, {
            where: {
                id
            }
        });
        if (userUpdated) {
            JSONResponse(200, {
                message: '¡Publicacion actualizado!',
                newPost: post
            }, res);
        }
        else {
            return JSONResponse(400, {
                msg: 'No se pudo actualizar la publicacion'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar actualizar la publicacion',
            error
        }, res);
    }
});
exports.putPost = putPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const existsPost = yield post_1.default.findByPk(id);
        if (!existsPost)
            return JSONResponse(400, {
                msg: 'La publicacion que quieres actualizar no existe'
            }, res);
        const postDeleted = yield post_1.default.destroy({
            where: {
                id
            }
        });
        if (postDeleted) {
            JSONResponse(200, {
                message: '¡Publicacion eliminada!',
                postDeleted
            }, res);
        }
        else {
            return JSONResponse(404, {
                msg: 'No se encontro ninguna publicacion'
            }, res);
        }
    }
    catch (error) {
        return JSONResponse(500, {
            msg: 'Error interno del servidor al intentar borrar la publicacion',
            error
        }, res);
    }
});
exports.deletePost = deletePost;
//# sourceMappingURL=posts.js.map