const express = require("express");
const router = express.Router();
const uploadIndex = require("../../index");

const uploadController = require("../controllers/uploadController");

router.post(
    "/upload-file",
    uploadIndex.upload.single("file"),
    uploadController.uploadFile
);

router.get("/delete-file", uploadController.deleteFile);

module.exports = router;
