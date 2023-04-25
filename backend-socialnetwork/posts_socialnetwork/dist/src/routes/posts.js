"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const structure_1 = __importDefault(require("../config/structure"));
const posts_1 = require("../controllers/posts");
const router = (0, express_1.Router)();
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETALLPOST_GET, [], posts_1.getAllPosts);
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOST_GET, [], posts_1.getPostById);
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOSTBYUSER_GET, [], posts_1.getPostByUser);
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_SEARCHPOST_GET, [], posts_1.getPostByDescription);
router.post(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_POST, [], posts_1.registerPost);
router.put(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_PUT, [], posts_1.putPost);
router.delete(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_DELETE, [], posts_1.deletePost);
exports.default = router;
//# sourceMappingURL=posts.js.map