// service1/src/routes/index.ts
import express from 'express';
import { getCatalogItems, getService1Data } from '../controllers/service1Controller';

export const service1Router = express.Router();

service1Router.get('/', getService1Data);
service1Router.post("/search", getCatalogItems)
