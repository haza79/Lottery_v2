import express,{Router} from "express";
import * as adminAuthenticationController from "@api/v1/controllers/admin/AdminAuthentication.controller";

const router:Router = express.Router();

router.post('/login',adminAuthenticationController.adminLogin);

export default router;