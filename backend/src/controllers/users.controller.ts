import { Request, Response } from 'express'
import pool from '../db'

export const getUsers = async (req: Request, res: Response) => {
	try {
		const result = await pool.query('SELECT * FROM users')
		return res.status(200).json(result.rows)
	} catch (err) {
		console.error(err)
		return res.status(500).json({ message: 'Database error.' })
	}
}
