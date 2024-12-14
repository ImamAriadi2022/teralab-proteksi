const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/admin', adminRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
