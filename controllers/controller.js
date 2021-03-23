require('dotenv').config()

var mysql = require('mysql')

var pool = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT_DB,
    user: process.env.USER,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
})

// connection.connect();


function searchProducts(req, res) {
    let sql = "SELECT * FROM product"
    let sql_;
    let name = req.query.name
    // let price = req.query.price
    let category = req.query.category
    let page = req.query.page
    let quantity = req.query.quantity
    let order = req.query.order
    let total;


    if (name && category) {
        console.log(`name: ${name}`)
        sql += ` WHERE name LIKE \'\%${name}\%\' AND category = ${category}`
    } else if (name) {
        console.log(`name: ${name}`)
        sql += ` WHERE name LIKE \'\%${name}\%\'`
    } else if (category) {
        sql += ` WHERE category = ${category}`
    }

    if (order === "price-ASC") {
        sql += ` ORDER BY price ASC`
    } else if (order === "price-DESC") {
        sql += ` ORDER BY price DESC`
    }

    sql_ = sql

    sql += ` LIMIT ${(page - 1) * quantity}, ${quantity}`

    pool.query(sql, function (error, result, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message)
            return res.status(404).send("Hubo un error en la consulta")
        }
        pool.query(sql_, function (error_, result_, field_) {
            if (error_) {
                console.log("Hubo un error en la consulta", error_.message)
                return res.status(404).send("Hubo un error en la consulta")
            }

            total = result_.length

            var response = {
                products: result,
                total: total
            }
            res.send(JSON.stringify(response))
        })
    })

}


function searchCategory(req, res) {
    let sql = "SELECT * FROM category"

    pool.query(sql, function (error, result, fields) {
        if (error) {
            console.log("Hubo un error en la consulta", error.message)
            return res.status(404).send("Hubo un error en la consulta")
        }

        var response = {
            category: result
        }

        res.send(JSON.stringify(response))
    })
}



module.exports = {
    searchCategory: searchCategory,
    searchProducts: searchProducts
}