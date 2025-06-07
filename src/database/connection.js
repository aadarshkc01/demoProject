const {Sequelize,DataTypes} = require("sequelize")


const sequelize = new Sequelize("postgresql://postgres.mqtvzwmebgwfvygfanoo:HelloProject1000099@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected")
})
.catch((error)=>{
    console.log("Error vayo" + error)
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.books= require("./models/bookModel")(sequelize,DataTypes)

sequelize.sync({alter: false}).then(()=>{
    console.log("Migrate vayo")
})

module.exports = db