const FeaturedProject = require('../models/featuredProject.js')

module.exports.viewFeaturedProjects = (request, response) =>{
    FeaturedProject.find({})
    .then(data => response.send({
        "status":"success",
        "success":true,
        "message":"successfully get the data",
        data
    }))
    .catch(error => response.send({
        "status":"failed",
        "success":false,
        "message":"error getting the data",
        error
    }))
}