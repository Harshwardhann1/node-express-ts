import {Router} from 'express';
import { userController } from '../controllers/userController';

const router = Router();
router.post('/create', userController.createUser);
router.get('/list', userController.getUser)
router.get('/getOne', userController.getUserByName)
router.delete('/delete', userController.deleteUser)



export default router;