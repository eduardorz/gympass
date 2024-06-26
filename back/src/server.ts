import express from "express";
import router from "./routes/indexRoutes";
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors)
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

export default app;

