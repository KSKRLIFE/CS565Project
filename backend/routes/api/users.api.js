const express = require("express");
const fetch = require("node-fetch");
const {access_key, baseAPI} = require("../../const");
const router = express.Router();

router.get("/:username", async (req, res) => {
    const {
        username
    } = req.params
    if (!username) {
        res.end('error : no username found')
    }
    try {
        const url = `${baseAPI}/users/${username}`
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
})

router.get("/:username/portfolio", async (req, res) => {
    const {
        username
    } = req.params
    if (!username) {
        res.end('error : no username found')
    }
    try {
        const url = `${baseAPI}/users/${username}/portfolio`
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
})

router.get("/:username/photos", async (req, res) => {
    const {
        username
    } = req.params
    //todo add other params
    if (!username) {
        res.end('error : no username found')
    }
    try {
        const url = `${baseAPI}/users/${username}/photos`
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
})

router.get("/:username/likes", async (req, res) => {
    const {
        username
    } = req.params
    //todo add other params
    if (!username) {
        res.end('error : no username found')
    }
    try {
        const url = `${baseAPI}/users/${username}/likes`
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
})

router.get("/:username/collections", async (req, res) => {
    const {
        username
    } = req.params
    //todo add other params
    if (!username) {
        res.end('error : no username found')
    }
    try {
        const url = `${baseAPI}/users/${username}/collections`
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
})

module.exports = router;