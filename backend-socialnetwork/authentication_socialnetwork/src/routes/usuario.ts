import { Router } from 'express';
import structure from '../config/structure';
import { getUser, registerUser, searchUser } from '../controllers/user';

const router = Router();



router.get(structure.APP_AUTHENTICATION_SOCIALNETWORK_GETUSER_GET, getUser)
router.get(structure.APP_AUTHENTICATION_SOCIALNETWORK_SEARCHUSER_GET, searchUser)
router.post(structure.APP_AUTHENTICATION_SOCIALNETWORK_REGISTER_POST, registerUser)


export default router;