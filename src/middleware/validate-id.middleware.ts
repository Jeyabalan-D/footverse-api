import type { Request, Response, NextFunction } from "express";

export function validateId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      message: "Invalid ID. ID must be a positive number.",
    });

    return;
  }

  next();
}