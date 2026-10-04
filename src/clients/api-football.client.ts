import { env } from "../config/env.js";
import { AppError } from "../middleware/app-error.js";

export async function apiFootballGet<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(
    `${env.apiFootballBaseUrl}${endpoint}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": env.apiFootballKey ?? "",
      },
    }
  );

  // if (!response.ok) {
  //   throw new Error(
  //     `API-Football request failed: ${response.status}`
  //   );
  // }

  if (!response.ok) {
  throw new AppError(
    "Football API request failed",
    502
  );
}

  return response.json() as Promise<T>;
}