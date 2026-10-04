import express from "express";
import healthRoutes from "./routes/health.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import cors from "cors";
import { env } from "./config/env.js";
import homeRoutes from "./routes/home.routes.js"
import competionRoutes from "./routes/competition.routes.js"
import teamRoutes from "./routes/team.routes.js"
import playerRoutes from "./routes/player.routes.js"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Footverse backend is running",
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/competion", competionRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/player", playerRoutes);

app.use(errorMiddleware);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});