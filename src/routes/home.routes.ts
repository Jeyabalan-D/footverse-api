import { Router } from "express";
import { 
  getFixturesController,
  getLiveMatchesController, 
} from "../controllers/home.controller.js";

const router = Router();

router.get("/live", getLiveMatchesController);
router.get("/fixtures", getFixturesController); 

export default router;