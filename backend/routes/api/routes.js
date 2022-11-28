const express = require("express");
const router = express.Router();
const photosApi = require("./photos.api");

router.use("/photos", photosApi);

module.exports = router;
