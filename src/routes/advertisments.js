import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.send("rota do anuncio"));

export default router;
