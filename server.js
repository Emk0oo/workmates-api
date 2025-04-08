// index.js
const express = require('express');
const dotenv = require('dotenv');
const usersRoutes = require('./routes/users');
const sessionsRoutes = require('./routes/sessions');


dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/sessions', sessionsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
