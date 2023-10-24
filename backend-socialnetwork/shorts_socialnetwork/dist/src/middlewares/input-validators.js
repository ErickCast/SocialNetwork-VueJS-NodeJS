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
exports.validateVideo = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ffprobe_1 = __importDefault(require("ffprobe"));
const ffprobe_static_1 = __importDefault(require("ffprobe-static"));
const validateVideo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const videosPath = 'uploads/';
    let ultimoArchivo = '';
    try {
        const archivos = yield fs_1.default.promises.readdir(videosPath);
        if (archivos.length > 0) {
            ultimoArchivo = archivos
                .map((archivo) => ({
                nombre: archivo,
                fechaModificacion: fs_1.default.statSync(path_1.default.join(videosPath, archivo)).mtime,
            }))
                .sort((a, b) => Number(b.fechaModificacion) - Number(a.fechaModificacion))[0].nombre;
            const info = yield new Promise((resolve, reject) => {
                (0, ffprobe_1.default)(videosPath + ultimoArchivo, { path: ffprobe_static_1.default.path }, (err, info) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(info);
                    }
                });
            });
            const videoDuration = info.streams[0].duration;
            if (videoDuration > 30) {
                yield fs_1.default.promises.unlink(videosPath + ultimoArchivo);
                return res.status(406).json({
                    msg: 'Error, El video no puede durar más de 30 segundos',
                });
            }
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            msg: 'Error al validar el video',
            error: error,
        });
    }
});
exports.validateVideo = validateVideo;
//# sourceMappingURL=input-validators.js.map