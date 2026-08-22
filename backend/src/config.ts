import dotenv from "dotenv";
dotenv.config();

export const MONGO_URL = process.env.MONGO_URL as string;
export const JWT_PASSWORD = process.env.JWT_SECRET as string;