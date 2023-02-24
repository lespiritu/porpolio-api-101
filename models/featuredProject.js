const mongoose = require('mongoose')

const featuredProject = new mongoose.Schema(
    {
        title:{
            type:String,
            require:[true, 'Title is required']
        },

        variant:{
            type:String,
            enum: ['primary', 'secondary']
        },
       
        descriptionText:{
            type:String,
            required:[true, 'Description link is required']
        },
        externalLink:{
            type:String,
            required:[true, 'External link is required']
        },
        imageLink:{
            type:String,
            required:[true, 'Image link link is required']
        },
        githubLink:{
            type:String
        },
        gitlabLink:{
            type:String
        },
        learnMoreLink:{
            type:String
        },
        usedTools:[]

    }
);


module.exports = mongoose.model("FeaturedProject", featuredProject);