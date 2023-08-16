const fs = require('fs')
const path = require('path')
const sequelize = require('sequelize')

const config = require('../config/config')
const db = {}

const sequelize = new sequelize (
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

fs.readdirSync(__dirname)
.filter((file) =>
     file !== 'index.js'
)
.forEach((file) => {
    const model = require(path.join(__dirname,file))(sequelize,sequelize.DataTypes)
    db[model.name] = model
})
db.sequelize = sequelize
db.sequelize = sequelize
module.exports = db