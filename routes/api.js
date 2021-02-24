const router = require("express").Router();
const Summary = require("../models/summary");
// const axios = require("axios");

/*
router.get("/cart", (req, res) => {
  Summary.find()
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});
*/

router.post("/cart", async (req, res) => {

    const menuItem = new Summary(req.body)
    await menuItem.save()
    res.json(menuItem)
})



module.exports = router;

