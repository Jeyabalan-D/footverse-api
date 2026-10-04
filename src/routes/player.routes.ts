import { Router } from "express";
import { validateId } from "../middleware/validate-id.middleware.js";
import {
  getPlayerByIdController,
  getPlayerMatchesController,
} from "../controllers/player.controller.js";

const router = Router();

router.get("/players/:id", validateId,getPlayerByIdController);

router.get("/players/:id/matches", validateId,getPlayerMatchesController);

export default router;