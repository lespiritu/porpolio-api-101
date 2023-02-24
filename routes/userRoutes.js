const express = require('express');
const router = express.Router();
const auth = require('../auth.js');

const userController = require('../Controller/userController.js');

router.post('/register', userController.userRegistration);
router.post('/login', userController.userLogin);


module.exports = router;