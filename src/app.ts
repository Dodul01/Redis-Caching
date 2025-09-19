import express, { Application, Request, Response } from 'express';
import cookiePerser from 'cookie-parser';
import cors from 'cors';
import client from './redis/redis';

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


app.post('/create-user', (req: Request, res: Response) => {
    const { name } = req.body;
    client.set("user:1", name);

    res.send({
        status: true,
        message: "User created successfully...",
        health: 'OK',
        data: name
    })
});


export default app;