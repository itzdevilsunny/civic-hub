require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// Database Connection
// const connectDB = require('./config/db');
// connectDB(); // Commented out for now to ensure server boots without actual Mongo instance

// Route imports
const dashboardRoutes = require('./routes/dashboardRoutes');
const webhookRoutes = require('./routes/webhooks/webhookRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/webhooks', webhookRoutes);

// Basic health check route
app.get('/', (req, res) => {
    res.send('CivicHub Aero API is running...');
});

// Socket.io Setup
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('New client connected to AeroCivic WebSocket:', socket.id);

    // Here we would emit real-time updates for changing metrics
    // socket.emit('initiative_update', { id: '...', newStage: 'Committee Review' })

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
