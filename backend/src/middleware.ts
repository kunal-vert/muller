import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_PASSWORD } from "./config.js";


export const UserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"]

    try {
        const decoded = jwt.verify(header as string, JWT_PASSWORD)
        if (decoded) {
            (req as any).userId = (decoded as any).id

            next()
        }
        else {
            return res.status(403).json({
                message: "You are not logged in!"
            });
        }
    } catch (error) {

        return res.status(403).json({
            message: "Invalid token or unauthorized"
        })

    }



}