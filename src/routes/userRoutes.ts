import {Router} from 'express';
import { userController } from '../controllers/userController';

const router = Router();
router.post('/user', userController.createUser);
router.get('/user', userController.getUser)
router.get('/user/:fname', userController.getUserByName)
router.delete('/user', userController.deleteUser)



export default router;