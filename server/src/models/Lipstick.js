module.exports = (sequelize, DataTypes) => {
    const Lipstick = sequelize.define("Lipstick", {
        nameBrand: DataTypes.STRING,
        model: DataTypes.STRING,
        Color: DataTypes.STRING,
        Type: DataTypes.STRING,
        Price: DataTypes.STRING,
        Quantity: DataTypes.STRING,
        AdditionalFeatures: DataTypes.STRING
    })
    return Lipstick;
};