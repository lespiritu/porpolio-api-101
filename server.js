const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const port = 3300;

const app = express();


//================== router
const projecRoutes = require('./routes/projectRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const featuredProject = require('./routes/featuredProjectRoutes.js')
//==================

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://admin:admin@batch245-espiritu.dgm8gby.mongodb.net/portfolio101-API?retryWrites=true&w=majority', 

    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
);


let db = mongoose.connection;
// connecting error
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", ()=>console.log(`We're connected to the database cloud!`));



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// request routes
app.use('/projects', projecRoutes)
app.use('/user', userRoutes)
app.use('/featuredProjects', featuredProject)

app.listen(port, ()=> console.log(`Server is running at server: ${port}`))