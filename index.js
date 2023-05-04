import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.send("Welcome to my Api"))

app.listen(4000, () => console.log("Api running on port 4000"))