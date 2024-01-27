import express,{Router} from "express";
import * as userController from "@api/v1/controllers/User";

const router:Router = express.Router();

router.post('',userController.createUser);

router.get('',userController.getAllusers);

router.get('/:id',userController.getUserById);

router.put('/:id',userController.updateUser);

router.delete('/:id',userController.deleteUser)

export default router;