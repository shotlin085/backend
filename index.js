require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'UP', message: 'API is healthy' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
