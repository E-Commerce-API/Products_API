require('newrelic');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(express.json());

const db = 'mongodb://localhost:27017/sdcproducts';

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("connected to " + db))
    .catch(err => console.log(err));

require("./routes/productsRoutes")(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("server is up and running on port: " + port);
});