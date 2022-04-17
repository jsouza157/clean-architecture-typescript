import { Router } from 'express';
import CreateUserController from '../../Controllers/CreateUserController';


const usersRouter = Router();

usersRouter.post('/user', new CreateUserController().create);

export default usersRouter;