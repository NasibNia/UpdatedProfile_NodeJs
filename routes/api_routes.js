var db  = require("../models");
module.exports = function(app){

    app.get("/api/projects", function(req, res){

        db.Projects.findAll({
            include : [{
                model : db.Tech
            }],
            order: [
                ['updatedAt', 'DESC']
            ]
        }).then(function(dbProjects){
            // and returnign them as the json object
            res.json(dbProjects);
        }); 
    });

    app.post("/api/projects", function(req, res){
        console.log("inside post");
        db.Project.create(req.body).then(function(err,dbProject){
            if (err){
                console.log(err)
            }else{
                console.log("project posted");
                // db.TechProject.create({
                //     UserId : req.body.UserId,
                //     ProjectId : dbProject.dataValues.id
                // }).then(function(pair){
                //     //return the newly created Project as a jason object
                //     res.json(dbProject); 
                // });
                res.json(dbProject);
            }

        });
    });
};