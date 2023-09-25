module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define("list", {

        task: {
            type: DataTypes.TEXT,
            allowNull: false
        },


    });
    return List;
};