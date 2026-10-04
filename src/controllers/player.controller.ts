import type { Request, Response } from "express";

import {
  getPlayerById,
  getPlayerMatches,
} from "../services/player.service.js";


export async function getPlayerByIdController(
  req: Request,
  res: Response
) {
  const id = Number(req.params.id);

  const player = await getPlayerById(id);

  res.json(player); 
}

export async function getPlayerMatchesController(
  req: Request,
  res: Response
) {
  const id = req.params.id;

  const playerId = Number(id);

  const performance =
    await getPlayerMatches(playerId);

  res.json(performance);
}