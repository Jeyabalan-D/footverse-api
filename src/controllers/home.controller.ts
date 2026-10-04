import type { Request, Response } from "express";
import { getLiveMatches, getFixtures} from "../services/home.service.js";
import { isValidDate } from "../utils/date.util.js";

export async function getLiveMatchesController( _req: Request, res: Response) {
    const matches = await getLiveMatches();
    res.json(matches);
}

export async function getFixturesController( req: Request, res: Response) {
  const date =
    typeof req.query.date === "string"
      ? req.query.date
      : undefined;

  if (date && !isValidDate(date)) {
    res.status(400).json({
      message: "Invalid date. Use YYYY-MM-DD format.",
    });

    return;
  }

  const matches = await getFixtures(date);

  res.json(matches);
}