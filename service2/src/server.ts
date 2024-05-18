// service1/src/server.ts
import express from 'express';
import { service1Router } from './routes/router';

const app = express();
const PORT = 200;

app.use(express.json());
app.use('/service2', service1Router);

app.listen(PORT, () => {
  console.log(`Service 1 running on port ${PORT}`);
});
