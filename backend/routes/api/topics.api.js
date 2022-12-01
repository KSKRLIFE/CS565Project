const express = require("express");
const fetch = require("node-fetch");
const {access_key, baseAPI} = require("../../const");
const router = express.Router();
const { checkValidOrderByTopics} = require("../utilities");

router.get("/", async (req, res) => {
    const {
        page = 1,
        per_page = 10,
        order_by='position'
    } = req.query

    if (!checkValidOrderByTopics(order_by)) {
        res.end('error: order_by is not valid')
    }
    try {
        const url = `${baseAPI}/topics?page=${page}&per_page=${per_page}`
        const resp = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${access_key}`
            }
        })
        const data = await resp.json()
        res.json(data)
    } catch (e) {
        console.log('error', e)
        res.send('error')
    }

});


module.exports = router;