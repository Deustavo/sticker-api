import { Router } from "express";
import StickerController from "../controllers/Sticker"

const router = Router();

const { send } = StickerController;

router.post("/", send);

export default router;
