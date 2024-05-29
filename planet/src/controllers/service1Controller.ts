// service1/src/controllers/service1Controller.ts
import { Request, Response } from 'express';

export const getService1Data = (req: Request, res: Response) => {
  res.json({ message: 'Data from planet' });
};
