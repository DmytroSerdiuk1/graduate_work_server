const {Router} = require("express");
const router = Router();
const cartDB = require('../resorses/cardsDb')

router.get("/cards", async (req, res) => {
    res.json({
        status: 200,
        data: cartDB
    })
})

router.get("/card/:id", (req, res) => {
    const id = req.params.id;
    const card = cartDB.filter(el => el._id === id);

    res.json(card[0])
})

module.exports = router