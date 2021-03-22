var express = require("express")
var cors = require("cors")

var controller = require("./controllers/controller.js")

var app = express()

app.use(cors())

app.use(express.urlencoded({
    extended: true
})
)

app.use(express.json())

app.get("/category", controller.searchCategory)
app.get("/products", controller.searchProducts)

var port = process.env.PORT || 5000

app.listen(port, function () {
    console.log("listen on port " + port)
})