const express = require('express');
const cors = require('cors');
const app = express();
const random = require("./routes/random");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/api/random",random);

app.listen(3000,function(){
    console.log("listening to 3000.");
});