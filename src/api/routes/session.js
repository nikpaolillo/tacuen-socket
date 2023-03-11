const session = require('../controllers/session')
const router = require('express').Router()

router.get('/init', session.init)

module.exports = router;

