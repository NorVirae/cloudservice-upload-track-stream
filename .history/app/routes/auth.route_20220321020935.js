const express = require("express");
const { uploadFile, deleteFile } = require("../controllers/file.controller");
const AuthCtrl = require("../controllers/")
const router = express.Router()

router.post("/login", AuthCtrl.login);
router.post("/register", AuthCtrl.register);

module.exports = router;
