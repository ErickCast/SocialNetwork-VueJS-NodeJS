"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const structure_1 = __importDefault(require("../config/structure"));
const express_validate_1 = require("../middlewares/express-validate");
const posts_1 = require("../controllers/posts");
const jwt_validate_1 = require("../middlewares/jwt-validate");
const db_validators_1 = require("../middlewares/db-validators");
const router = (0, express_1.Router)();
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETALLPOST_GET, [], posts_1.getAllPosts);
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOST_GET, [], posts_1.getPostById);
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOSTBYUSER_GET, [], posts_1.getPostByUser);
router.get(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_SEARCHPOST_GET, [], posts_1.getPostByDescription);
router.post(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_POST, [
    jwt_validate_1.validateJWT,
    db_validators_1.checkIfPostIsEmpty
], posts_1.registerPost);
router.put(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_PUT, [
    jwt_validate_1.validateJWT,
    db_validators_1.postExists,
    db_validators_1.userOwnPost,
    db_validators_1.checkIfPostIsEmpty,
    express_validate_1.validate
], posts_1.putPost);
router.delete(structure_1.default.APP_GESTORPUBLICACIONES_SOCIALNETWORK_DELETE, [
    jwt_validate_1.validateJWT,
    db_validators_1.postExists,
    db_validators_1.userOwnPost,
    db_validators_1.checkIfPostIsEmpty,
    express_validate_1.validate
], posts_1.deletePost);
exports.default = router;
//# sourceMappingURL=posts.js.map