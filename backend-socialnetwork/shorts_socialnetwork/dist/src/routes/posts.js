"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const structure_1 = __importDefault(require("../config/structure"));
const shorts_1 = require("../controllers/shorts");
const router = (0, express_1.Router)();
router.get(structure_1.default.APP_GESTORSHORTS_SOCIALNETWORK_GETALLSHORTS, [], shorts_1.getAllShorts);
exports.default = router;
//# sourceMappingURL=posts.js.map