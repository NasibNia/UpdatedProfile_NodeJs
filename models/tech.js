module.exports = function(sequelize, DataTypes){
    var Tech = sequelize.define("Tech",{
        name : {
            type: DataTypes.STRING
        },
    });

    Tech.associate = (models) => {
        Tech.belongsToMany(models.Project, {through : {model: models.TechProject}});
    };
    return Tech;
};

