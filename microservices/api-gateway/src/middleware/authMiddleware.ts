import { NextFunction, Request, Response } from 'express';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;

    if (token && token !== '') {
        next();
    } else {
        res.status(401).json({ status: 'error', message: 'Unauthorized' });
    }
};
