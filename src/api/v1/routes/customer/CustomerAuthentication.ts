import express,{Router} from "express";
import * as customerAuthenticationController from "@api/v1/controllers/customer/CustomerAuthentication";

const router:Router = express.Router();

router.post('/login',customerAuthenticationController.customerLogin);

router.post('/register',customerAuthenticationController.customerRegister);

export default router;