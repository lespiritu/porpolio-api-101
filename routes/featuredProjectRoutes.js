const express = require('express')
const router = express.Router()
const auth = require('../auth.js')

const { viewFeaturedProjects } = require('../Controller/viewFeaturedProject.js')
const {addFeaturedProject} = require('../Controller/addFeaturedProject.js')

router.get('/projects', viewFeaturedProjects);
router.post('/addfeaturedProject', auth.verify, addFeaturedProject)


module.exports = router;