const { Sequelize, DataTypes } = require('sequelize')
const Connection= new Sequelize('tml','root','',{
    host:'localhost',
    dialect:'mysql',
})

Connection.authenticate()
.then(res => console.log('Sequelize connected'))
.catch(err => console.log('* Your error *',err))

const db={}
db.Connection= Connection;
db.Sequelize = Sequelize;

db.Connection.sync({force:false})
.then(res => console.log('Re synching your work'))
.catch(err => console.log('your err while Syncronzing ', err))

    //All Models
db.User= require('./User')(Connection,DataTypes)
db.userData= require('./dataInsert')(Connection,DataTypes)

    //All RELATIONS
db.User.hasOne(db.userData,{foreignKey:'dataID', as :'UserData'})
db.userData.belongsTo(db.User,{foreignKey:'dataID', as :'User'})

module.exports= db