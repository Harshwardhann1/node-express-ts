import express, {Application, Request, Response} from 'express';
import userRoutes from './routes/userRoutes'
const bodyParser = require('body-parser')
const app: Application = express();
const port: number = 3000;


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/api', userRoutes)

app.listen(port, () => {
    console.log(
        `Connected successfully on port ${port}`
    )
})