import { Request, Response } from 'express'
import pool from '../db'

type Loan = {
	bookId: number
	borrowerName: string
	date: string
}

export const getLoans = async (req: Request, res: Response) => {
	try {
		const result = await pool.query('SELECT * FROM loans')
		return res.status(200).json(result)
	} catch (err) {
		console.error(err)
		return res.status(500).json({ message: 'Database error.' })
	}
}

export const newLoan = async (req: Request<{}, {}, Loan>, res: Response) => {
	const { bookId, borrowerName, date } = req.body
	if (!bookId || !borrowerName || !date) {
		return res.status(400).json({ message: 'Missing data.' })
	}
	try {
		const result = await pool.query(
			'INSERT INTO loans (book_id, borrower_name, loan_date) VALUES ($1, $2, $3) RETURNING *',
			[bookId, borrowerName, date],
		)
		return res.status(201).json({ message: 'New loan registered successfully.', loan: result.rows[0] })
	} catch (err) {
		console.error(err)
		return res.status(500).json({ error: 'Database error.' })
	}
}
