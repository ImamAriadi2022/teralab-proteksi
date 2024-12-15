const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const cors = require('cors');

const app = express();
// Middleware CORS
app.use(cors({
    origin: '*', // Mengizinkan semua domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] // Mengizinkan semua metode
}));



app.use(express.json());

console.log('Hello World!');

// Routes
app.use('/api/users', userRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/admin', adminRoutes);

// Server
const PORT = 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
