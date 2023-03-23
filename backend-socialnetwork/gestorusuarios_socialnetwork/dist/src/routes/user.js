"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const structure_1 = __importDefault(require("../config/structure"));
const user_1 = require("../controllers/user");
const db_validators_1 = require("../middlewares/db-validators");
const express_validate_1 = require("../middlewares/express-validate");
const router = (0, express_1.Router)();
router.get(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_GETUSER_GET, user_1.getUserById);
router.get(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_SEARCHUSER_GET, user_1.getUserByName);
router.post(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_REGISTER_POST, [
    (0, express_validator_1.body)('email', 'El correo no es valido').isEmail(),
    (0, express_validator_1.body)('email').custom(db_validators_1.emailExists),
    (0, express_validator_1.body)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.body)('last_names', 'El apellido es requerido').not().isEmpty(),
    (0, express_validator_1.body)('username', 'El nombre de usuario es requerido').not().isEmpty(),
    (0, express_validator_1.body)('password', 'La contraseña es obligatoria y debe tener mas de 5 letras').isLength({ min: 6 }),
    express_validate_1.validate
], user_1.registerUser);
router.put(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_PUT, [
    (0, express_validator_1.body)('email', 'El correo no es valido').isEmail(),
    (0, express_validator_1.body)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.body)('last_names', 'El apellido es requerido').not().isEmpty(),
    (0, express_validator_1.body)('username', 'El nombre de usuario es requerido').not().isEmpty(),
    (0, express_validator_1.body)('password', 'La contraseña es obligatoria y debe tener mas de 5 letras').isLength({ min: 6 }),
    express_validate_1.validate
], user_1.putUser);
router.delete(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_DELETE, user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map