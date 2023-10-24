"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveVideoInDirectory = void 0;
const express_1 = require("express");
const structure_1 = __importDefault(require("../config/structure"));
const express_validate_1 = require("../middlewares/express-validate");
const shorts_1 = require("../controllers/shorts");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const input_validators_1 = require("../middlewares/input-validators");
// import { checkIfPostIsEmpty, postExists, userOwnPost } from '../middlewares/db-validators';
const router = (0, express_1.Router)();
const saveVideoInDirectory = (temp = false) => {
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, (temp) ? 'uploads_temp/' : 'uploads/'); // Define el directorio de destino para los archivos subidos
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path_1.default.extname(file.originalname)); // Define el nombre del archivo en el servidor
        },
    });
    const upload = (0, multer_1.default)({ storage });
    return upload;
};
exports.saveVideoInDirectory = saveVideoInDirectory;
const uploadingVideo = (0, exports.saveVideoInDirectory)();
router.get(structure_1.default.APP_GESTORSHORTS_SOCIALNETWORK_GETALLSHORTS, [], shorts_1.getAllShorts);
router.get(structure_1.default.APP_GESTORSHORTS_SOCIALNETWORK_GETSHORTSBYDESCRIPTION_GET, [], shorts_1.getShortByDescription);
router.post(structure_1.default.APP_GESTORSHORTS_SOCIALNETWORK_POST_SAVESHORT, [
    uploadingVideo.single('video'),
    input_validators_1.validateVideo,
    express_validate_1.validate
], shorts_1.uploadShort);
router.put(structure_1.default.APP_GESTORSHORTS_SOCIALNETWORK_PUT_UPDATESHORT, [], shorts_1.updateShortDescripcion);
router.delete(structure_1.default.APP_GESTORSHORTS_SOCIALNETWORK_DELETE_DELETESHORT, [], shorts_1.deleteShort);
exports.default = router;
//# sourceMappingURL=shorts.js.map