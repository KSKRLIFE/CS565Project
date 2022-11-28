const express = require("express");
const fetch = require("node-fetch");
const {checkValidOrientation, checkValidOrderBy} = require("../utilities");
const router = express.Router();
const {access_key, baseAPI} = require("../../const");

router.get("/", async (req, res) => {
    const {
        page = 1,
        per_page = 10,
        order_by = 'latest'
    } = req.query

    if (!checkValidOrderBy(order_by)) {
        res.send('error')
    } else {
        try {
            const url = `${baseAPI}/photos?page=${page}&per_page=${per_page}&order_by=${order_by}`
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
    }

});

router.get("/random", async (req, res) => {
    const {
        collections,
        topics,
        username,
        query,
        orientation,
        content_filter,
        count
    } = req.query

    try {
        let url = `${baseAPI}/photos/random?client_id=${access_key}&`
        if (collections) {
            url = `${url}collections=${collections}&`
        }
        if (topics) {
            url = `${url}topics=${topics}&`
        }
        if (username) {
            url = `${url}username=${username}&`
        }
        if (orientation) {
            !checkValidOrientation(orientation) && res.end('error, valid orientation query should be landscape, portrait, squarish')
            url = `${url}orientation=${orientation}&`
        }
        if (content_filter) {
            url = `${url}content_filter=${content_filter}&`
        }
        if (query) {
            url = `${url}query=${query}&`
        }
        if (count) {
            url = `${url}count=${count}&`
        }
        console.log(url);
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
})

router.get("/:id", async (req, res) => {
    const {id} = req.params
    try {
        const url = `${baseAPI}/photos/${id}?client_id=${access_key}`
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
})

router.get("/:id/statistics", async (req, res) => {
    const {
        id,
        resolution = 'days',
        quantity = 30
    } = req.query
    if (!id) {
        res.end('error : id is required for statistics')
    }
    try {
        let url = `${baseAPI}/photos/${id}/statistics?client_id=${access_key}`
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
})


module.exports = router;
