import { Router } from 'express';
import { body } from 'express-validator'
import structure from '../config/structure';
import { emailExists } from '../middlewares/db-validators';
import { validate } from '../middlewares/express-validate';
import { deletePost, getAllPosts, getPostByDescription, getPostById, getPostByUser, putPost, registerPost } from '../controllers/posts';

const router = Router();


router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETALLPOST_GET, [], getAllPosts);
router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOST_GET, [], getPostById);
router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_GETPOSTBYUSER_GET, [], getPostByUser);
router.get(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_SEARCHPOST_GET, [], getPostByDescription);
router.post(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_POST, [], registerPost);
router.put(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_PUT, [], putPost);
router.delete(structure.APP_GESTORPUBLICACIONES_SOCIALNETWORK_DELETE, [], deletePost);


export default router;