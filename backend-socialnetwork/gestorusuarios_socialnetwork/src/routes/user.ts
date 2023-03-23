import { Router } from 'express';
import { body } from 'express-validator'
import structure from '../config/structure';
import { deleteUser, getUserById, getUserByName, putUser, registerUser } from '../controllers/user';
import { emailExists } from '../middlewares/db-validators';
import { validate } from '../middlewares/express-validate';

const router = Router();



router.get(structure.APP_GESTORUSUARIOS_SOCIALNETWORK_GETUSER_GET, getUserById)
router.get(structure.APP_GESTORUSUARIOS_SOCIALNETWORK_SEARCHUSER_GET, getUserByName)
router.post(structure.APP_GESTORUSUARIOS_SOCIALNETWORK_REGISTER_POST,[
    body('email','El correo no es valido').isEmail(),
    body('email').custom(emailExists),
    body('name', 'El nombre es requerido').not().isEmpty(),
    body('last_names', 'El apellido es requerido').not().isEmpty(),
    body('username', 'El nombre de usuario es requerido').not().isEmpty(),
    body('password', 'La contraseña es obligatoria y debe tener mas de 5 letras').isLength({min:6}),
    validate
],registerUser)
router.put(structure.APP_GESTORUSUARIOS_SOCIALNETWORK_PUT, [
    body('email','El correo no es valido').isEmail(),
    body('name', 'El nombre es requerido').not().isEmpty(),
    body('last_names', 'El apellido es requerido').not().isEmpty(),
    body('username', 'El nombre de usuario es requerido').not().isEmpty(),
    body('password', 'La contraseña es obligatoria y debe tener mas de 5 letras').isLength({min:6}),
    validate
],putUser)
router.delete(structure.APP_GESTORUSUARIOS_SOCIALNETWORK_DELETE, deleteUser)


export default router;