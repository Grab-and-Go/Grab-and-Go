const path = require("path");
const API = require("./api");
const router = require("express").Router();


router.use("/api", API);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;