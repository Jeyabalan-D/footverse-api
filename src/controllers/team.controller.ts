import type { Request, Response } from "express";

import {
  getTeamById,
  getTeamFixtures,
  getTeamResults,
  getTeamSquad,
} from "../services/team.service.js";


export async function getTeamByIdController( req: Request, res: Response) {
  const id = Number(req.params.id);

  const team = await getTeamById(id);

  res.json(team);
}

export async function getTeamFixturesController( req: Request, res: Response) {
  const id = Number(req.params.id);

  const fixtures = await getTeamFixtures(id);

  res.json(fixtures);
}

export async function getTeamResultsController( req: Request, res: Response ) {
  const id = Number(req.params.id);

  const results = await getTeamResults(id);

  res.json(results);
}

export async function getTeamSquadController( req: Request, res: Response ) {
  const id = Number(req.params.id);

  const squad = await getTeamSquad(id);

  res.json(squad);
}