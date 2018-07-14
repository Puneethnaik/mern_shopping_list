const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const app = express();
//bodyParser middleware
app.use(bodyParser.json());

const mongoURI = require('./config/keys').mongoURI;
mongoose
.connect(mongoURI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(err => console.log(err))


//Use Routes
app.use('/api/items', items);


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log("Server started on port " +  port);
})
