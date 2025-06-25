import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to the API");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ success: false, message: "Endpoint not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  res
    .status(statusCode)
    .json({ success: false, message: err.message, error: err });
});

export default app;
