import "dotenv/config";

export const env = {
  port: Number(process.env.PORT) || 5000,
  
  apiFootballKey: process.env.API_FOOTBALL_KEY,
  apiFootballBaseUrl: process.env.API_FOOTBALL_BASE_URL,

  footballDataApiKey: process.env.FOOTBALL_DATA_API_KEY,
  footballDataBaseUrl: process.env.FOOTBALL_DATA_BASE_URL,
};