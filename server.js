// index.js
const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/users');
const sessionsRoutes = require('./routes/sessions');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/sessions', sessionsRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
