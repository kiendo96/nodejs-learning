import express from 'express';
import homeRoute from './routes/home'
import productRoute from './routes/product'
import categoryRoute from './routes/category'
import connect from './models/connect-db';
import authRoute from './routes/auth'
const app = express()
const port = 3000

//connect
connect()

app.use(express.json())
app.use(homeRoute);
app.use('/api',productRoute)
app.use('/api', categoryRoute)
app.use('/api', authRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})