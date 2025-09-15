import express, { Application } from 'express';
import cookiePerser from 'cookie-parser';
import cors from 'cors';

const app: Application = express();

app.use(express.json());
app.use(cookiePerser());

app.use(cors({
    origin: "*",
    credentials: true
}));

// app router here 

app.get('/', (req, res) => {
    res.send({
        status: true,
        message: "Server is running...",
        health: 'OK'
    })
});

export default app;