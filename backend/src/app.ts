import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './tasks/routes/task.routes'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT

const corsOptions: cors.CorsOptions = {
  origin: ['http://localhost:4200',], 
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
