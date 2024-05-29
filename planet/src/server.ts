// service1/src/server.ts
import express from 'express';
import { service1Router } from './routes/router';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use('/planet', service1Router);

app.listen(PORT, () => {
  console.log(`Service 2 running on port ${PORT}`);
});