import { footballDataGet } from "../clients/football-data.client.js";
import type {
  FootballDataTeamDetails,
  FootballDataTeam,
  TeamMatch,
  FootballDataSquadPlayer
} from "../types/football.types.js";

export const footballCompetitions = {
  PL: "Premier League",
  PD: "La Liga",
  SA: "Serie A",
  FL1: "Ligue 1",
  BL1: "Bundesliga",
  CL: "Champions League",
} as const;

export type FootballCompetition = keyof typeof footballCompetitions;

export function isValidCompetition(code: string): code is FootballCompetition {
  return code in footballCompetitions;
}

interface FootballDataTeamMatchesResponse {
  matches: {
    id: number;
    utcDate: string;
    status: string;
    matchday: number | null;
    stage: string;

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


export async function getTeamById(
  teamId: number
): Promise<FootballDataTeamDetails> {
  const data =
    await footballDataGet<FootballDataTeamDetails>(
      `/teams/${teamId}`
    );

  return data;
}

export async function getTeamFixtures(
  teamId: number
): Promise<TeamMatch[]> {
  const data =
    await footballDataGet<FootballDataTeamMatchesResponse>(
      `/teams/${teamId}/matches?status=SCHEDULED&limit=10`
    );

  return data.matches
    .sort(
      (a, b) =>
        new Date(a.utcDate).getTime() -
        new Date(b.utcDate).getTime()
    )
    .map((match) => ({
      id: match.id,

      date: match.utcDate,
      status: match.status,
      matchday: match.matchday,
      stage: match.stage,

      competition: match.competition,

      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,

      score: {
        home: match.score.fullTime.home,
        away: match.score.fullTime.away,
      },
    }));
}


export async function getTeamResults(
  teamId: number
): Promise<TeamMatch[]> {
  const data =
    await footballDataGet<FootballDataTeamMatchesResponse>(
      `/teams/${teamId}/matches?status=FINISHED&limit=10`
    );

  return data.matches
    .sort(
      (a, b) =>
        new Date(b.utcDate).getTime() -
        new Date(a.utcDate).getTime()
    )
    .map((match) => ({
      id: match.id,

      date: match.utcDate,
      status: match.status,
      matchday: match.matchday,
      stage: match.stage,

      competition: match.competition,

      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,

      score: {
        home: match.score.fullTime.home,
        away: match.score.fullTime.away,
      },
    }));
}

export async function getTeamSquad(
  teamId: number
): Promise<FootballDataSquadPlayer[]> {
  const team =
    await footballDataGet<FootballDataTeamDetails>(
      `/teams/${teamId}`
    );

  return team.squad;
}
