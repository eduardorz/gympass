import express from "express";
import router from "./indexRoutes";
import morgan from 'morgan';
import cors from 'cors';

const app = express();



/*
app.use(morgan('dev'));
*/

app.use(cors());
app.use(express.json());
app.use(router);

export default app;

