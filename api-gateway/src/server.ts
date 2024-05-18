import express from 'express';
import { checkAuth } from './middleware/authMiddleware';
import { service1Routes } from './routes/service1Routes';
import { service2Routes } from './routes/service2Routes';
import { service3Routes } from './routes/service3Routes';

const app = express();
const PORT = 1100;

// Apply token validation middleware to service2 routes
app.use('/service2', checkAuth);

// Define routes
app.use('/service1', service1Routes);
app.use('/service2', service2Routes);
app.use('/service3', service3Routes);

// Default route
app.get('/', (req, res) => {
    res.send('This is the API gateway');
});

// Start the server
app.listen(PORT, () => {
    console.log(`API gateway is running at http://localhost:${PORT}`);
});
