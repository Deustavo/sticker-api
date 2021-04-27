import { Router } from "express";
import Advertisment from "./routes/advertisments";

const router = Router();

router.use("/advertisment", Advertisment);

export default router;
