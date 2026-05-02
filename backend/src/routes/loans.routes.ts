import express from 'express'
import { newLoan } from '../controllers/loans.controller'

const router = express.Router()

router.get("/get-loans", newLoan)
router.post("/new-loan", newLoan)

export default router
