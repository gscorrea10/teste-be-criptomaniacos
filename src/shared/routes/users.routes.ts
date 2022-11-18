import { Router } from 'express';
import { UpdateUserController } from '../../modules/users/useCases/updateUser/UpdateUserController';
import { CreateUserController } from '../../modules/users/useCases/createUser/CreateUserController';
import { GetAllUsersController } from '../../modules/users/useCases/getAllUsers/GetAllUsersController';
import { DeleteUserController } from '../../modules/users/useCases/deleteUser/DeleteUserController';

const userRoutes = Router();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const getAllUsersController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', getAllUsersController.handle);
userRoutes.put('/:id', updateUserController.handle);
userRoutes.delete('/:id', deleteUserController.handle);

export { userRoutes };
