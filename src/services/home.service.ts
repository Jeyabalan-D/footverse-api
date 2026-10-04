import type { Match, ApiFootballFixture } from "../types/football.types.js";
import { apiFootballGet } from "../clients/api-football.client.js";
import { mapFixtureToMatch } from "./football.mapper.js";
import { LIVE_LEAGUE_IDS } from "../utils/leagues.util.js";

const LIVE_FIXTURES_QUERY = `live=${LIVE_LEAGUE_IDS.join("-")}`;

export async function getLiveMatches(): Promise<Match[]> {
  const data = await apiFootballGet<{
    response: ApiFootballFixture[];
  }>(`/fixtures?${LIVE_FIXTURES_QUERY}`);

  return data.response.map(mapFixtureToMatch);
}

export async function getFixtures(date?: string ): Promise<Match[]> {
  const queryParams = new URLSearchParams();

  if (date) {
    queryParams.append("date", date);
  }

  const query = queryParams.toString();
  console.log("query",query);

  const data = await apiFootballGet<{
    response: ApiFootballFixture[];
  }>(`/fixtures?${query}`);

  return data.response
                      .filter((fixture) => LIVE_LEAGUE_IDS.includes(fixture.league.id))
                      .map(mapFixtureToMatch);
}