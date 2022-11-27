const express = require("express");
const cookieParser = require("cookie-parser");
const fetch = require("node-fetch");
const app = express();

const baseAPI = 'https://api.unsplash.com'
const access_key = '2b49bba071a9f09d53cc8811ff6e1a137e230063abf92aebc473ae1ce7f3239b'
const client_secret = 'c497c84fe84713d394f750394541078580edde481bcaf41a77b8280544a338c3'
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send('HI')
});

app.get('/photos', async (req, res) => {
    const resp = await fetch(`${baseAPI}/photos?client_id=${access_key}`)
    const data = await resp.json()
    res.json(data)
})

app.get('/photos/:id', async (req, res) => {
    const resp = await fetch(`${baseAPI}/photos/${req.params.id}?client_id=${access_key}`)
    const data = await resp.json()
    res.json(data)
})

const listener = app.listen(8080, function () {
    console.log("Listening on port " + listener.address().port);
});
