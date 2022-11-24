const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/", (req, res)=>{
    res.send('HI')
});

const listener = app.listen(8080, function () {
    console.log("Listening on port " + listener.address().port);
});
