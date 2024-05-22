import express from 'express';
import { checkAuth } from './middleware/authMiddleware';


const app = express();
const PORT = 5000;

// Apply token validation middleware to service2 routes

// Default route
app.get('/', (req, res) => {
    res.send('This is the API gateway');
});

// Start the server
app.listen(PORT, () => {
    console.log(`API gateway is running at http://localhost:${PORT}`);
});
