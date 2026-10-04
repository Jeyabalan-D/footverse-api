import { Router } from "express";
import {
  getCompetitionStandingsController,
  getCompetitionUpcomingFixturesController,
} from "../controllers/competition.controller.js";

const router = Router();

router.get( "/:code/standings", getCompetitionStandingsController);

router.get("/:code/upcoming",getCompetitionUpcomingFixturesController);

export default router;
