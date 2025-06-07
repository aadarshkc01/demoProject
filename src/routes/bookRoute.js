const { fetchBook, addBook, editBook, deleteBook } = require("../controller/bookController")

const router = require("express").Router()

router.route("/").get(fetchBook).post(addBook)
router.route("/:id").patch(editBook).delete(deleteBook)

module.exports = router