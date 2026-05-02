import express from 'express'
import cors from 'cors'
import pool from './db'

const PORT = 5000
const app = express()

app.use(cors())

app.use("/health", (req, res) => {
    res.send("ok")
})

app.use("/ready", async (req, res) => {
    const data = await pool.query("SELECT * FROM books")
    res.send(data.rows)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})