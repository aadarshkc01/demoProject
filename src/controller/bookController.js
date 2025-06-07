const { books } = require("../database/connection")


exports.addBook = async function (req,res){

    // if(!bookName || !bookPrice || !bookAuthor || !bookDescription){
    //     console.log("Please provide bookName, bookPrice, bookAuthor, bookDescription")
    //     return
    // }

    const{bookName,bookPrice,bookAuthor,bookDescription} =req.body
    await books.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookDescription,
    })
    res.json({
        message: "Book added successfully"
    })
}

exports.fetchBook = async function (req,res){
    const datas = await books.findAll()
        res.json({
            message: "Book fetched successfully",
            datas
        })
}

exports.singleFetch = async function(req,res){
    const id = req.params.id
    const data = await books.findByPk(id)

    res.json({
        message: "Single book fetched successfully",
        data
    })
}

exports.editBook = async function(req,res){
    const id = req.params.id
    
    const {bookName,bookPrice,bookAuthor,bookDescription} = req.body
    books.update({bookName,bookPrice,bookAuthor,bookDescription},
        {
            where:{
                id
            }
        }
    )

    res.json({
        message: "Book updated successfully"
    })
}

exports.deleteBook = async function(req,res){
    const id = req.params.id
    await books.destroy({
        where:{
            id
        }
    })
    res.json({
        message: "Book deleted successfully"
    })
}