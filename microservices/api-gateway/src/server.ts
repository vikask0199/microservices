// service1/src/server.ts
import express from 'express';
import { service1Router } from './routes/router';

const app = express();
const PORT = 1100;

app.use(express.json());
app.use('/apigateway', service1Router);

app.listen(PORT, () => {
  console.log(`Service 1 running on port ${PORT}`);
});
