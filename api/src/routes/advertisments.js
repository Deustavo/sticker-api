import { Router } from "express";
import AdvertismentController from "../controllers/Advertisment";

const router = Router();

router.get("/:id", AdvertismentController.find);
router.post("/", AdvertismentController.create);

export default router;
