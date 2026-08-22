import { z } from "zod"
import type { Request, Response, NextFunction } from "express";

 export const ValidateReq = (req: Request, res: Response, next: NextFunction) => {
    const BodyValidation = z.object({
        username: z.string({
            message: "username must be valid string"
        }).min(3, {
            message: " must be atleast 3 char"
        }).max(20, {
            message: " should have max char only 20"
        }),

        password: z.string({
            message: "password is require and password must be valid string"
        }).min(7, {
            message: "password must be atleast 7 char"
        }).max(30, {
            message: "you have exceeded the password limitation char"
        }).refine((password) => /[A-Z]/.test(password), {
            message: "Password must contain at least one uppercase letter (A-Z)."
        }).refine((password) => /[a-b]/.test(password), {
            message: "Password must contain at least one lowercase letter (a-b)"
        }).refine((password) => /[!@#$%^&*?]/.test(password), {
            message: "Password must contain at least one lowercase letter (!@#$%^&*?)"
        })
    })

    const parseDataWithZodValidation = BodyValidation.safeParse(req.body);
    if (!parseDataWithZodValidation.success) {
        res.status(400).json({
            message: "inncoert format",
            error: parseDataWithZodValidation.error.issues
        })
        return
    }
    next()
}

