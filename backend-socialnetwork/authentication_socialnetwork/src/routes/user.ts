import { Router } from 'express';
import { body } from 'express-validator'
import structure from '../config/structure';
import { login } from '../controllers/login';
import { validate } from '../middlewares/express-validate';

const router = Router();



router.post(structure.APP_AUTHENTICATION_SOCIALNETWORK_LOGIN_GET, [
    body('email','El correo es obligatorio y debe ser un correo valido').isEmail(),
    body('password', 'La contraseña es obligatoria').notEmpty(),
    validate
],login)

export default router;