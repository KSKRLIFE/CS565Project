const express = require("express");
const router = express.Router();
const photosApi = require("./photos.api");
const searchApi = require("./search.api");
const collectionsApi = require("./collections.api");

router.use("/photos", photosApi);
router.use("/search", searchApi);
router.use("/collections", collectionsApi);

module.exports = router;
