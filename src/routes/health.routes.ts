import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "OK",
    message: "API is healthy",
  });
});

export default router;