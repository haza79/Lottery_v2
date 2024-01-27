import { Application } from "express";
import customerRouter from "@api/v1/routes/customer/index"
import adminRouter from "@api/v1/routes/admin/index";

export function router(app:Application){
    app.use("/main",customerRouter);
    app.use("/backoffice",adminRouter)
}