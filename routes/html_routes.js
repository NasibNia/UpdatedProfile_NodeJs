var db  = require("../models");
module.exports = function(app){

    // Renders homepage
    app.get("/", function(req, res){
        res.render("index",{});
    });

    app.get("/portfolio", function(req, res){

        db.Project.findAll({
            include : [{
                model : db.Tech
            }]
            // order: [
            //     ['updatedAt', 'ASED']
            // ]
        }).then(function(dbProject){
            // and returnign them as the json object
            // res.json(dbShout);
            console.log("dbProjects  is   " , dbProject);
            res.render("portfolio",{allProjects: dbProject});
        }); 
    });


    app.get("/newProject", function(req, res){

        console.log("inside newProject get");
        res.render("newProj",{});
    });

};