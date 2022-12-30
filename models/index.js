const dbConfig = require("../config/dbConfig.js");

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(

    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
)

sequelize.authenticate()

.then(() =>{
    console.log('connected');
})

.catch(err => {
    console.log("Error" + err);
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize,DataTypes)
db.comments = require('./commentModel.js')(sequelize,DataTypes)

db.sequelize.sync({ force:false })

.then(() =>{
    console.log('re-sync done ');
})


// 1 to many relation....

db.products.hasMany(db.comments, {

    foreignKey: 'product_id',
    as: 'comment'
})

db.comments.belongsTo(db.products, {

    foreignKey: 'product_id',
    as: 'product'
})

module.exports = db