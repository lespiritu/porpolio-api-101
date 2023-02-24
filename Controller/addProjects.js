const auth = require('../auth.js')
const Project = require('../models/projectsCard.js')


module.exports.addProject = (request, response) =>{
    const input = request.body;

    const userData = auth.decode(request.headers.authorization);

    if(!userData.isAdmin){
        response.send({
            "status":"failed",
            "message": "You cannot accest this page!"
        })
    }
    else{

        let newProject = new Project(
            {
                title:input.title,
                content:input.content,
                externalLink:input.externalLink,
                githubLink:input.githubLink,
                gitlabLink:input.gitlabLink,
                footer: input.footer
             
            }
        )

        // This will add and save the new product to database product collection
        return newProject.save()
        .then(result => response.send({
            "status":"success",
            "success": true,
            "message":"successfully added project on the list!",
            result
        }))
        .catch(error => response.send({
            "status":"failed",
            "success": false,
            "message":"error occured!",
            error
        }))

    }
}

