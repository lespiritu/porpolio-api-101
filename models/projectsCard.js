const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:[true, 'Title is required']
        },

        content:{
            type:String,
            require:[true, 'Content is required']
        },
       
        externalLink:{
            type:String,
            required:[true, 'External link is required']
        },
        githubLink:{
            type:String
        },
        gitlabLink:{
            type:String
        },
        isActive:{
            type:Boolean,
            default:false
        },
        footer:[]

    }
);


module.exports = mongoose.model("Project", projectSchema);