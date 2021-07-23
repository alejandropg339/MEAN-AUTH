require('dotenv').config();
const express = require('express');

const port= process.env.PORT;
const app = express();
require('./db');

app.use(express.json());
app.use('/api', require('./routes/index'));


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});