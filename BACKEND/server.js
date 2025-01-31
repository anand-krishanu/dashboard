require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
const cors = require('cors');
import { json } from 'body-parser';

import authRoutes from './routes/auth';

const app = express();
app.use(cors());
app.use(json());

mongoose
    .connect(process.env.MONGO_URI, { useNewParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});