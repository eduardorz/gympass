import { Router } from 'express';
import { getUserByIdController, getUsersController, loginController, registerController } from './usersController';


const usersRouter = Router();

usersRouter.get('/', getUsersController);

usersRouter.get('/:id', getUserByIdController);

usersRouter.post('/register', registerController);

usersRouter.post('/login', loginController);


export default usersRouter;