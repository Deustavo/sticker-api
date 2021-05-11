import { Router } from "express";
import Advertisment from "./routes/advertisments";
import Sticker from "./routes/stickers";

const router = Router();

router.use("/advertisment", Advertisment);
router.use("/sticker", Sticker);
export default router;
