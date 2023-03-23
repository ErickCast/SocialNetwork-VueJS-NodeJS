"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const structure_1 = __importDefault(require("../config/structure"));
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_GETUSER_GET, user_1.getUserById);
router.get(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_SEARCHUSER_GET, user_1.getUserByName);
router.post(structure_1.default.APP_GESTORUSUARIOS_SOCIALNETWORK_REGISTER_POST, user_1.registerUser);
exports.default = router;
//# sourceMappingURL=usuario.js.map