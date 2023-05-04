import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


const dogs = [{
    name: "Paco",
    breed: "chihuahua",
    age: 34,
},
{

    name: "Bubba",
    breed: "labrador",
    age: 56,
},

{    name: "Lucia",
    breed: "yorkie",
    age: 23,
},

{
    name: "Bob",
    breed: "pitbull",
    age: 69,
}]

app.get("/", (req, res) => res.json(dogs))

app.listen(4000, () => console.log("Api running on port 4000"))
