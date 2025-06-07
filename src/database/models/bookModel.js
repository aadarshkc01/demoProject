

const bookModel = (sequelize,DataTypes)=>{
    const books = sequelize.define("book",{
        bookName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        bookPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        bookAuthor:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookDescription:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    })
    return books
}

module.exports = bookModel