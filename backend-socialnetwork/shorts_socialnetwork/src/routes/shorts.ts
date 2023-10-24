import { Router } from 'express';
import { body, check } from 'express-validator'
import structure from '../config/structure';
import { validate } from '../middlewares/express-validate';
import { deleteShort, getAllShorts, getShortByDescription, updateShortDescripcion, uploadShort } from '../controllers/shorts';
import { validateJWT } from '../middlewares/jwt-validate';
import multer from 'multer';
import path from 'path';
import { validateVideo } from '../middlewares/input-validators';
// import { checkIfPostIsEmpty, postExists, userOwnPost } from '../middlewares/db-validators';

const router = Router();
export const saveVideoInDirectory = (temp: boolean = false) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, (temp) ?'uploads_temp/' : 'uploads/'); // Define el directorio de destino para los archivos subidos
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Define el nombre del archivo en el servidor
    },
  });
  const upload = multer({ storage });
  return upload;
}

const uploadingVideo = saveVideoInDirectory();

router.get(structure.APP_GESTORSHORTS_SOCIALNETWORK_GETALLSHORTS, [], getAllShorts);
router.get(structure.APP_GESTORSHORTS_SOCIALNETWORK_GETSHORTSBYDESCRIPTION_GET, [], getShortByDescription);
router.post(structure.APP_GESTORSHORTS_SOCIALNETWORK_POST_SAVESHORT,[
  uploadingVideo.single('video'), 
  validateVideo,
  validate
], uploadShort);
router.put(structure.APP_GESTORSHORTS_SOCIALNETWORK_PUT_UPDATESHORT, [], updateShortDescripcion)
router.delete(structure.APP_GESTORSHORTS_SOCIALNETWORK_DELETE_DELETESHORT, [], deleteShort)



export default router;