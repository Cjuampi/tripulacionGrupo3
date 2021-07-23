require("dotenv").config();
/* require('./config/mongo.cnx') */
const express = require("express");
var cors = require('cors')
const app = express();
const router = require("./routes/routes")
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');

app.use(cors())

app.use(cookieParser())

app.use("/public", express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

 app.get('/token',function(req, res){
    res.cookie('cookie_name' , 'cookie_value').send('Cookie is set');
}); 
app.use("/", router);
app.listen(PORT, ()=>{
    console.log(`EJEMPLO http://localhost:${PORT}`);
})