import express from 'express'
import { getLoans, newLoan } from '../controllers/loans.controller'

const router = express.Router()

router.get("/get-loans", getLoans)
router.post("/new-loan", newLoan)

export default router
