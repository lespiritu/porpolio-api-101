const express = require('express')
const router = express.Router()
const auth = require('../auth.js')

const {viewProjects} = require('../Controller/viewProjects.js');
const { addProject } = require('../Controller/addProjects.js')

router.get('/card', viewProjects);
router.post('/addProject',auth.verify, addProject )

module.exports = router;