const express = require('express');
const cors = require('cors');
const favicon = require('serve-favicon');
require('dotenv').config();

const authRoutes = require('./routes/auth.js');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(favicon('./public/favicon.ico'));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
