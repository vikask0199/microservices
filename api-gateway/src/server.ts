import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Access Denied: No Token Provided!');
    }

    try {
        console.log(token, "verified");
        next();
    } catch (err) {
        return res.status(401).send('Access Denied: Invalid Token!');
    }
});

app.get('/validate', (req: Request, res: Response) => {
    console.log("Ha ha ha .....")
    res.send('Token is valid');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Auth service is running on http://localhost:${PORT}`);
});
