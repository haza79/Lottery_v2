import express from "express"
import customerAuthenticationRouter from "@api/v1/routes/customer/CustomerAuthentication";
const router = express.Router();

router.get("/test",(req,res)=>{
    res.send("test customer router");
})
router.use("/authentication",customerAuthenticationRouter);

export default router;