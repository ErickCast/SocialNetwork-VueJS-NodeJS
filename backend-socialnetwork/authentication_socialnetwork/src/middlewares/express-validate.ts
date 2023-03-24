import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validate = (req: Request,res: Response,next: NextFunction) => {
    const errors: any = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            msg: 'Error!',
            errors
        });
    }

    next();
}