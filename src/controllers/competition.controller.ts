import type { Request, Response } from "express";
import {
  getCompetitionStandings,
  getCompetitionUpcomingFixtures,
  type FootballCompetition,
  isValidCompetition,
} from "../services/competition.service.js";

export async function getCompetitionStandingsController(req: Request,res: Response) {
  const code = req.params.code;

  if (!isValidCompetition(code)) {
    res.status(400).json({
      message:
        "Invalid competition code. Supported codes: PL, PD, SA, FL1, BL1, CL.",
    });

    return;
  }

  const competition: FootballCompetition = code;

  const standings =
    await getCompetitionStandings(competition);

  res.json(standings);
}


export async function getCompetitionUpcomingFixturesController(
  req: Request,
  res: Response
) {
  const code = req.params.code;

  if (!isValidCompetition(code)) {
    res.status(400).json({
      message:
        "Invalid competition code. Supported codes: PL, PD, SA, FL1, BL1, CL.",
    });

    return;
  }

  const competition: FootballCompetition = code;

  const fixtures =
    await getCompetitionUpcomingFixtures(competition);

  res.json(fixtures);
}
