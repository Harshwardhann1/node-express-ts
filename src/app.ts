import express, {Application, Request, Response} from 'express';
import userRoutes from './routes/userRoutes'
const app: Application = express();
const port: number = 3000;

app.use('/api', userRoutes)

app.listen(port, () => {
    console.log(
        `Connected successfully on port ${port}`
    )
})