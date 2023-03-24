"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const structure_1 = __importDefault(require("../config/structure"));
const login_1 = require("../controllers/login");
const express_validate_1 = require("../middlewares/express-validate");
const router = (0, express_1.Router)();
router.post(structure_1.default.APP_AUTHENTICATION_SOCIALNETWORK_LOGIN_GET, [
    (0, express_validator_1.body)('email', 'El correo es obligatorio y debe ser un correo valido').isEmail(),
    (0, express_validator_1.body)('password', 'La contraseña es obligatoria').notEmpty(),
    express_validate_1.validate
], login_1.login);
exports.default = router;
//# sourceMappingURL=user.js.map