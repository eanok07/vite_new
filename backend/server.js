const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
app.use('/api/mechanic', require('./routes/mechanic'));
app.use('/api/requests', require('./routes/request'));

app.get('/', (req, res) => res.send('Vehicle Care API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
