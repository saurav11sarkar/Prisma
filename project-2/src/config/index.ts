import path from "path";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const prisma = new PrismaClient();


export default {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  db: process.env.DATABASE_URL,
  round: process.env.SOLT_ROUND,
};
