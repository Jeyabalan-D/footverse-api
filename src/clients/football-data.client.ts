import { env } from "../config/env.js";
import { AppError } from "../middleware/app-error.js";

export async function footballDataGet<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(
    `${env.footballDataBaseUrl}${endpoint}`,
    {
      method: "GET",
      headers: {
        "X-Auth-Token": env.footballDataApiKey ?? "",
      },
    }
  );

  if (!response.ok) {
    throw new AppError(
      "Football-data.org request failed",
      502
    );
  }

  return response.json() as Promise<T>;
}