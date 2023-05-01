import { Router } from 'express';
import { body, check } from 'express-validator'
import structure from '../config/structure';
import { validate } from '../middlewares/express-validate';
import { deletePost, getAllPosts, getPostByDescription, getPostById, getPostByUser, putPost, registerPost } from '../controllers/posts';
import { validateJWT } from '../middlewares/jwt-validate';
import { checkIfPostIsEmpty, postExists, userOwnPost } from '../middlewares/db-validators';

const router = Router();


router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETALLPOST_GET, [], getAllPosts);
router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOST_GET, [], getPostById);
router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOSTBYUSER_GET, [], getPostByUser);
router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_SEARCHPOST_GET, [], getPostByDescription);
router.post(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_POST, [
    validateJWT,
    checkIfPostIsEmpty
], registerPost);
router.put(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_PUT, [
    validateJWT,
    postExists,
    userOwnPost,
    checkIfPostIsEmpty,
    validate
], putPost);
router.delete(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_DELETE, [
    validateJWT,
    postExists,
    userOwnPost,
    checkIfPostIsEmpty,
    validate
], deletePost);


export default router;