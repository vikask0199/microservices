// api-gateway/src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided, access denied' });
    }

    // Validate token logic here
    if (token === 'your-expected-token') {  // Replace with real validation logic
        next();
    } else {
        return res.status(401).json({ message: 'Invalid token, access denied' });
    }
};
