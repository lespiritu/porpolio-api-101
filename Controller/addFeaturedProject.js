const auth = require('../auth.js')
const FeaturedProject = require('../models/featuredProject.js')


module.exports.addFeaturedProject = (request, response)=>{

    const userData = auth.decode(request.headers.authorization);
    const input = request.body;

    if(!userData.isAdmin){
        response.send({
            "status":"failed",
            "message": "You cannot access this page!"
        })
    }
    else{
        
        let newFeatureProject = new FeaturedProject(
            {
                title:input.title,
                variant:input.variant,
                descriptionText:input.descriptionText,
                usedTools:input.usedTools,
                externalLink:input.externalLink,
                imageLink: input.imageLink,

                githubLink:input.githubLink,
                gitlabLink:input.gitlabLink,
                learnMoreLink: input.learnMoreLink
             
            }
        )

        // This will add and save the new product to database product collection
        return newFeatureProject.save()
        .then(result => response.send({
            "status": 'success',
            "message":"successfully save new featured project",
            "success":true,
            result
        }))
        .catch(error => response.send({
            "status":"failed",
            "message": "You cannot access this page!",
            error
        }))
    }
}