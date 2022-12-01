const express = require("express");
const router = express.Router();
const photosApi = require("./photos.api");
const searchApi = require("./search.api");

router.use("/photos", photosApi);
router.use("/search", searchApi);

module.exports = router;
