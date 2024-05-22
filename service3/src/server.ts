// service1/src/server.ts
import express from 'express';
import { service1Router } from './routes/router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/service3', service1Router);

app.listen(PORT, () => {
  console.log(`Service 3 running on port ${PORT}`);
});
