import express          from 'express';
import cors             from 'cors';
import path             from 'path';
import dotenv           from 'dotenv';
import morgan           from 'morgan';
import cookieParser     from 'cookie-parser';
import connectDB        from "./config/database.js";
import router           from "./router/index.js";

dotenv.config();

connectDB().then(() => {
    console.log('Conexión DB establecida');
});

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(cookieParser(0));
app.use(morgan('dev'));
app.use('/api', router);

app.listen(port, () => {
    console.log(`Servidor iniciado en: http://localhost:${port}/`)
});