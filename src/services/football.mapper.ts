import type {
  ApiFootballFixture,
  Match,
} from "../types/football.types.js";

export function mapFixtureToMatch(
  fixture: ApiFootballFixture
): Match {
  return {
    id: fixture.fixture.id,

    league: fixture.league.name,
    leagueId: fixture.league.id,
    season: fixture.league.season,

    date: fixture.fixture.date,

    status: fixture.fixture.status.short,
    statusLong: fixture.fixture.status.long,

    venue: fixture.fixture.venue?.name ?? null,

    homeTeam: {
      id: fixture.teams.home.id,
      name: fixture.teams.home.name,
      logo: fixture.teams.home.logo,
    },

    awayTeam: {
      id: fixture.teams.away.id,
      name: fixture.teams.away.name,
      logo: fixture.teams.away.logo,
    },

    score: {
      home: fixture.goals.home,
      away: fixture.goals.away,
    },
  };
}