import { Router } from "express";
import { validateId } from "../middleware/validate-id.middleware.js";
import {
  getTeamByIdController,
  getTeamFixturesController,
  getTeamResultsController,
  getTeamSquadController,
} from "../controllers/team.controller.js";

const router = Router();

router.get("/teams/:id" , validateId, getTeamByIdController);

router.get("/teams/:id/fixtures", validateId,getTeamFixturesController);

router.get("/teams/:id/results", validateId,getTeamResultsController);

router.get("/teams/:id/squad", validateId,getTeamSquadController);

export default router;