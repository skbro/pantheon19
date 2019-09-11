const express = require("express");
const router = express.Router();
const profile = require('./profile');
const event = require('./events');
const authentication = require('./authenticate')
const feedback = require('./feedback');
const portalDown = require('./../middlewares/portaldown');


router.use('/auth', portalDown, authentication);
router.use('/profile', portalDown, profile);
router.use('/event', event);
router.use('/', feedback);

module.exports = router;