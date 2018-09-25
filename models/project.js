module.exports = function(sequelize , DataTypes){
    var Project = sequelize.define("Project" , {
        name        : DataTypes.STRING,
        tech        : DataTypes.STRING,
        description : DataTypes.STRING,
        img         : DataTypes.STRING,
        webUrl      : DataTypes.STRING,
        gitHub      : DataTypes.STRING,    
    });

    Project.associate = function(models){
        Project.belongsToMany(models.Tech, {through: {model : models.TechProject}});
    };
    return Project;
};