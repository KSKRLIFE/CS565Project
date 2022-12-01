const express = require("express");
const fetch = require("node-fetch");
const {checkValidOrientation, checkValidOrderBy} = require("../utilities");
const router = express.Router();
const {access_key, baseAPI, oauthURL, client_secret,} = require("../../const");

router.get("/", async (req, res) => {
    const {
        token
    } = req.query
    if (!token) {
        res.end('error: no code')
    } else {
        try {
            const url = `${baseAPI}/me`
            const resp = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            const data = await resp.json()
            res.json(data)
        } catch (e) {
            console.log('error', e)
            res.send('error')
        }
    }


});
module.exports = router;