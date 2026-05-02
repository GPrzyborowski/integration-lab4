import express from 'express'
import { getBooks, newBook } from '../controllers/books.controller'

const router = express()

router.get("/get-books", getBooks)
router.post("/new-book", newBook)

export default router