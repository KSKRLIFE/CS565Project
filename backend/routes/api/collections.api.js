const express = require("express");
const fetch = require("node-fetch");
const {access_key, baseAPI} = require("../../const");
const router = express.Router();
const {checkValidOrientation} = require("../utilities");

router.get("/", async (req, res) => {
    const {
        page = 1,
        per_page = 10,
    } = req.query

    try {
        const url = `${baseAPI}/collections?page=${page}&per_page=${per_page}`
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


router.get("/:id", async (req, res) => {
    const {
        id
    } = req.params

    if (!id) {
        res.end('error: No id provided')
    }
    try {
        const url = `${baseAPI}/collections/${id}`
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


router.get("/:id/photos", async (req, res) => {
    const {
        id
    } = req.params
    const {
        page = 1,
        per_page = 10,
        orientation
    } = req.query

    if (!id) {
        res.end('error: No id provided')
    }
    let url = `${baseAPI}/collections/${id}/photos?page=${page}&per_page=${per_page}&`
    if (orientation) {
        !checkValidOrientation(orientation) && res.end('error, valid orientation query should be landscape, portrait, squarish')
        url = `${url}orientation=${orientation}`
    }
    try {
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


router.get("/:id/related", async (req, res) => {
    const {
        id
    } = req.params
    if (!id) {
        res.end('error: No id provided')
    }
    try {
        const url = `${baseAPI}/collections/${id}/related`
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