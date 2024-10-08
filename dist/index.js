import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
// import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import cors from 'cors';
// import mongoose from 'mongoose';
import 'dotenv/config';
import emailRoutes from './routes/sendEmails.js';
import { get404, get500 } from './controllers/error.js';
const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
const PORT = process.env.PORT || 3000;
// const PORT = 5000;
// app.use(fileUpload());
app.use(bodyParser.json());
// app.use(getSource);
app.use('/api/v1', emailRoutes);
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/emails', emailRoutes);
// app.use('/api/v1/uploads', express.static('uploads'));
app.use(get404);
app.use(get500);
const dbAccess = process.env.MONGO_DB_ACCESS_URI;
app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`);
});
