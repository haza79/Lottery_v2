import express from "express"
import adminAuthenticationRouter from "@api/v1/routes/admin/AdminAuthentication.router";

const router = express.Router();

router.use("/authentication",adminAuthenticationRouter);

export default router;