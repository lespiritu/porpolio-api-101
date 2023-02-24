const Project = require('../models/projectsCard.js')

module.exports.viewProjects = (request, response) =>{
    Project.find({})
    .then(data => response.send({
        "status":"success",
        "success": true,
        "message":"Successfully you can view all project data!",
        data
    }))
    .catch(error => response.send({
        "status":"failed",
        "success": false,
        "message":"error occured!",
        error
    }))
}