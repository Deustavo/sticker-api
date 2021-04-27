import { Router } from "express";
import AdvertismentController from "../controllers/Advertisment";

const router = Router();

router.get("/:id", AdvertismentController.find);

export default router;
