require("dotenv").config();
require('./config/mongo.cnx')
const express = require("express");
var cors = require('cors')
const app = express();
const router = require("./routes/routes")
const PORT = process.env.PORT || 3000;


app.use(cors())


app.use("/Public", express.static('Public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", router);
app.listen(PORT, ()=>{
    console.log(`EJEMPLO http://localhost:${PORT}`);
})