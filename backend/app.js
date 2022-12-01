const express = require("express");
const cookieParser = require("cookie-parser");
const fetch = require("node-fetch");
const cors = require('cors');
const router = require("./routes/api/routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send('backend is up and running')
});

app.use(cors({
    origin: '*'
}));

app.use('/api', router)


const listener = app.listen(8080, function () {
    console.log("Listening on port " + listener.address().port);
});
