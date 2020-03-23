const express = require('express');
const cors = require('cors');
const app = express();
const random = require("./routes/random");
const dll = require("./routes/dll");
const search = require("./routes/search");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/api/random",random);
app.use("/api/dll",dll);
app.use("/api/search",search);

app.listen(3000,function(){
    console.log("listening to 3000.");
});