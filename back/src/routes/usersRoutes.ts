import { Router } from 'express';
import { getUsers, getUserById, register } from '../controllers/usersController';


const usersRouter = Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', getUserById);

usersRouter.post('/register', register);

export default usersRouter;