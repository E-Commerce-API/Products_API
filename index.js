const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.json());

mongoose
    .connect(
        'mongodb://localhost:27017/sdcproducts',
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("connected to database"))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server is up and running on port: " + port);
});