const express = require('express');
const connect = require('./database/connect')
const app = express();
require('dotenv').config();
const handleErrors = require('./middlewares/handleError')
const notFound = require ('./middlewares/notfound')
const router = require('./routers/routes')
const port = process.env.PORT || 6000

app.use(express.json())
app.use('/api/v1',router);

//middleware
app.use(notFound);
app.use(handleErrors);

const start = async() =>{
    try {
        //connecting to database
        await connect(process.env.DATABASE_CONNECTION)
        console.log('Connected to database');
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
} 
start();