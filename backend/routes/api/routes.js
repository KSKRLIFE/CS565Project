const express = require("express");
const router = express.Router();
const photosApi = require("./photos.api");
const searchApi = require("./search.api");
const collectionsApi = require("./collections.api");
const topicsApi = require("./topics.api");
const userApi = require("./users.api");
const oauthApi = require("./oauth.api");
const meApi = require("./me.api");

router.use("/photos", photosApi);
router.use("/search", searchApi);
router.use("/collections", collectionsApi);
router.use("/topics", topicsApi);
router.use("/users", userApi);
router.use("/oauth", oauthApi);
router.use("/me", meApi);


module.exports = router;
