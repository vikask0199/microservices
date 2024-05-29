import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());

interface Services {
  [key: string]: string;
}

const services: Services = {
  umbra: 'http://umbra:6000',
  iceye: 'http://iceye:7000',
  planet: 'http://planet:8000',
  service1: 'http://service1:1000',
  service2: 'http://service2:2000',
  service3: 'http://service3:3000'
};

app.post('/service-call-gateway', async (req: Request, res: Response) => {
  const { serviceName, path, method, body } = req.body;

  if (!services[serviceName]) {
    return res.status(400).json({ error: 'Invalid service name' });
  }

  try {
    const response = await axios({
      url: `${services[serviceName]}${path}`,
      method: method,
      data: body
    });

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


app.get('/service-call', (req: Request, res: Response) => {
  console.log("Ha ha ha .....")
  res.send('service call working . . .');
});

const PORT = 10000;
app.listen(PORT, () => {
  console.log(`Service call gateway running on port ${PORT}`);
});
