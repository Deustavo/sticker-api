import { Router } from "express";
import AdvertismentController from "../controllers/Advertisment";

const router = Router();

const { find, create } = AdvertismentController;

router.get("/:id", find);
router.post("/", create);

export default router;
