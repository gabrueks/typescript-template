import { Request, Response, NextFunction } from 'express';

// Auth example
export default class Guard {
    constructor() {}

    public checkSession = (req: Request, res: Response, next: NextFunction) => {
        // Check Header
        if (!req.get('session')) {
            res.status(401).end();
            return;
        }
        next();
    }
}
