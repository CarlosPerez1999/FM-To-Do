import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './tasks/routes/task.routes'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/tasks', taskRoutes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})