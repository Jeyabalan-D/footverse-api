export interface Match {
  id: number;
  league: string;
  leagueId: number;
  season: number;
  date: string;
  status: string;
  statusLong: string;
  venue: string | null;

  homeTeam: {
    id: number;
    name: string;
    logo: string;
  };

  awayTeam: {
    id: number;
    name: string;
    logo: string;
  };

  score: {
    home: number | null;
    away: number | null;
  };
}

export interface ApiFootballFixture {
  fixture: {
    id: number;
    date: string;

    status: {
      short: string;
      long: string;
    };

    venue: {
      name: string | null;
    } | null;
  };

  league: {
    id: number;
    name: string;
    season: number;
  };

  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
    };

    away: {
      id: number;
      name: string;
      logo: string;
    };
  };

  goals: {
    home: number | null;
    away: number | null;
  };
}


export interface FootballDataTeam {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface PremierLeagueStanding {
  position: number;

  team: FootballDataTeam;

  playedGames: number;
  form: string | null;

  won: number;
  draw: number;
  lost: number;

  points: number;

  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface PremierLeagueFixture {
  id: number;

  date: string;
  status: string;
  matchday: number | null;
  stage: string;

  homeTeam: FootballDataTeam;
  awayTeam: FootballDataTeam;
}

export interface FootballDataTeamDetails {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;

  address: string | null;
  website: string | null;
  founded: number | null;
  clubColors: string | null;
  venue: string | null;
} 


export interface TeamMatch {
  id: number;

  date: string;
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
    home: number | null;
    away: number | null;
  };
}

export interface FootballDataSquadPlayer {
  id: number;
  name: string;
  position: string | null;
  dateOfBirth: string | null;
  nationality: string | null;
}

export interface FootballDataPlayer {
  id: number;
  name: string;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  nationality: string | null;
  position: string | null;
  shirtNumber: number | null;

  currentTeam: FootballDataTeam | null;
}

export interface PlayerMatch {
  id: number;

  date: string;
  status: string;

  competition: {
    id: number;
    name: string;
    code: string;
  };

  homeTeam: FootballDataTeam;
  awayTeam: FootballDataTeam;

  score: {
    home: number | null;
    away: number | null;
  };
}

export interface PlayerMatch {
  id: number;

  date: string;
  status: string;

  competition: {
    id: number;
    name: string;
    code: string;
  };

  homeTeam: FootballDataTeam;
  awayTeam: FootballDataTeam;

  score: {
    home: number | null;
    away: number | null;
  };
}

export interface PlayerPerformance {
  player: FootballDataPlayer;

  matches: PlayerMatch[];
}