import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import landingRouter from './routes/landingRoutes.js';

const app = express();

const port = parseInt(process.env.PORT) || 4000;

app.use(express.json());
app.use(
  cors({
    origin: 'https://tripping-world-radio.vercel.app/',
    credentials: true,
  })
);

app.use('/api/notify', landingRouter);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
