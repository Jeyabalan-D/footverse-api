import { footballDataGet } from "../clients/football-data.client.js";
import type {
  FootballDataTeam,
  FootballDataPlayer,
  PlayerMatch,
  PlayerPerformance,
} from "../types/football.types.js";


interface FootballDataPlayerMatchesResponse {
  person: FootballDataPlayer;

  matches: {
    id: number;
    utcDate: string;
    status: string;

    competition: {
      id: number;
      name: string;
      code: string;
    };

    homeTeam: FootballDataTeam;
    awayTeam: FootballDataTeam;

    score: {
      fullTime: {
        home: number | null;
        away: number | null;
      };
    };
  }[];
}


export async function getPlayerById(
  playerId: number
): Promise<FootballDataPlayer> {
  const player =
    await footballDataGet<FootballDataPlayer>(
      `/persons/${playerId}`
    );

  return player;    
}

export async function getPlayerMatches(
  playerId: number
): Promise<PlayerPerformance> {
  const data =
    await footballDataGet<FootballDataPlayerMatchesResponse>(
      `/persons/${playerId}/matches?status=FINISHED&limit=10`
    );

  return {
    player: data.person,

    matches: data.matches.map((match): PlayerMatch => ({
      id: match.id,

      date: match.utcDate,
      status: match.status,

      competition: match.competition,

      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,

      score: {
        home: match.score.fullTime.home,
        away: match.score.fullTime.away,
      },
    })),
  };
}