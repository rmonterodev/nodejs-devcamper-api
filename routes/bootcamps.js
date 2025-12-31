const express = require("express");
const { getBootcamp, getBootcamps, createBootcamp } = require('../controllers/bootcamps');

const router = express.Router();

router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp);

module.exports = router;
