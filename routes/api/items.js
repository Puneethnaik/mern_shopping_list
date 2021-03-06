const express = require('express');
const router = express.Router();

//Item object
const Item = require('../../models/Item');

//@route    GET api/insert
//@desc     Get all items
//@access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    .then(items => {res.json(items)});
});


module.exports = router;