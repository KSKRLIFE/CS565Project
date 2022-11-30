const express = require("express");
const fetch = require("node-fetch");
const {checkValidOrientation, checkValidOrderBy} = require("../utilities");
const router = express.Router();
const {access_key, baseAPI, oauthURL, client_secret,} = require("../../const");

router.get("/", async (req, res) => {
    let redirectURL = 'http://localhost:3000/oauth'
    const {
        code
    } = req.query
    if (!code) {
        res.end('error: no code')
    } else {
        try {
            let url = `${oauthURL}?client_id=${access_key}&client_secret=${client_secret}&redirect_uri=${redirectURL}&code=${code}&grant_type=authorization_code`
            let token = await fetch(url, {
                method: 'POST',
            }).then(data => data.json())
            console.log(token);
            res.json(token)
        } catch (e) {
            console.log('error', e)
            res.send('error')
        }
    }


});
module.exports = router;