const express = require("express");
const fetch = require("node-fetch");
const {access_key, baseAPI} = require("../../const");
const router = express.Router();

router.get("/photos", async (req, res) => {
    const {
        query,
        page = 1,
        per_page = 12
    } = req.query
    if (!query) {
        res.end('error : no search query found')
    }else{
        try {
            const url = `${baseAPI}/search/photos?query=${query}&page=${page}&per_page=${per_page}`
            const resp = await fetch(url, {
                headers: {
                    Authorization: `Client-ID ${access_key}`
                },
                method:'GET'
            })
            const data = await resp.json()
            res.json(data)
        } catch (e) {
            console.log('error', e)
            res.send('error')
        }
    }

})


module.exports = router;