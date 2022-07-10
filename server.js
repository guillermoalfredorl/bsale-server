const express = require("express")
const cors = require("cors")

const controller = require("./controllers/controller.js")

const app = express()

app.use(cors())

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.get("/category", controller.searchCategory)
app.get("/products", controller.searchProducts)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("listen on port " + port)
})