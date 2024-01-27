import express,{Application} from "express";
import {router} from "@api/v1/routes/Routes";
import cors from "cors";
import prisma from "@config/database";

const app:Application = express();

app.use(cors());
app.use(express.json());
router(app);

export default app;