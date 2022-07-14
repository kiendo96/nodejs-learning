import express from 'express';
import homeRoute from './routes/home'
import productRoute from './routes/product'
import connect from './models/connect-db';
const app = express()
const port = 3000

//connect
connect()

app.use(express.json())
app.use(homeRoute);
app.use('/api',productRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})