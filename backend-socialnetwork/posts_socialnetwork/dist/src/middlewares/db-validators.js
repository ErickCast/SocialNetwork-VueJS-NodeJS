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
exports.checkIfPostIsEmpty = exports.postExists = exports.userOwnPost = void 0;
const post_1 = __importDefault(require("../models/post"));
/* export const emailExists = async(email: string) => {
    const userEmail = await User.findOne({
        where:{
            email
        }
    })
    console.log(userEmail)
    if(userEmail) {
        throw new Error('El email de ese usuario ya existe');
    }
} */
const userOwnPost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { usuario } = req.body;
    console.log(req.params.id);
    console.log(usuario.id);
    console.log('Este es el body de la peticion: ', req.body);
    const userPost = yield post_1.default.findOne({
        where: {
            id: req.params.id,
            usuario_id: usuario.id
        }
    });
    if (!userPost) {
        return res.status(401).json({
            msg: "El usuario debe ser el dueño del post para realizar alguna accion con este"
        });
    }
    next();
});
exports.userOwnPost = userOwnPost;
const postExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield post_1.default.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!post) {
        return res.status(404).json({
            msg: "Esa publicacion no existe!"
        });
    }
    next();
});
exports.postExists = postExists;
const checkIfPostIsEmpty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const post = req.body;
    if (post.archivo === "" && post.descripcion === "") {
        return res.status(406).json({
            msg: "La publicacion no puede subirse vacia, por favor, agreguele contenido!"
        });
    }
    next();
});
exports.checkIfPostIsEmpty = checkIfPostIsEmpty;
//# sourceMappingURL=db-validators.js.map