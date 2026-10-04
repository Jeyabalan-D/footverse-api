import { footballDataGet } from "../clients/football-data.client.js";
import type { PremierLeagueStanding , PremierLeagueFixture } from "../types/football.types.js";

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

interface FootballDataStandingsResponse {
  standings: {
    stage: string;
    type: string;
    group: string | null;
    table: PremierLeagueStanding[];
  }[];
}

interface FootballDataMatchesResponse {
  matches: {
    id: number;
    utcDate: string;
    status: string;
    matchday: number | null;
    stage: string;

    homeTeam: PremierLeagueFixture["homeTeam"];
    awayTeam: PremierLeagueFixture["awayTeam"];
  }[];
}


export async function getCompetitionStandings(
  competition: FootballCompetition
): Promise<PremierLeagueStanding[]> {
  const data =
    await footballDataGet<FootballDataStandingsResponse>(
      `/competitions/${competition}/standings`
    );

  const totalStanding = data.standings.find(
    (standing) => standing.type === "TOTAL"
  );

  return totalStanding?.table ?? [];
}

export async function getCompetitionUpcomingFixtures(
  competition: FootballCompetition
): Promise<PremierLeagueFixture[]> {
  const data =
    await footballDataGet<FootballDataMatchesResponse>(
      `/competitions/${competition}/matches?status=SCHEDULED`
    );

  return data.matches
    .sort(
      (a, b) =>
        new Date(a.utcDate).getTime() -
        new Date(b.utcDate).getTime()
    )
    .slice(0, 10)
    .map((match) => ({
      id: match.id,

      date: match.utcDate,
      status: match.status,
      matchday: match.matchday,
      stage: match.stage,

      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
    }));
}