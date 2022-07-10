const pool = require('../conectionDB/conectionDB')

const searchProducts = (req, res) => {
    let sql = "SELECT * FROM product"
    let sql_;
    let name = req.query.name
    let category = req.query.category
    let page = req.query.page
    let quantity = req.query.quantity
    let order = req.query.order
    let total;


    if (name && category) {
        sql += ` WHERE name LIKE \'\%${name}\%\' AND category = ${category}`
    } else if (name) {
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
            return res.status(404).send("Hubo un error en la consulta")
        }
        pool.query(sql_, function (error_, result_, field_) {
            if (error_) {
                return res.status(404).send("Hubo un error en la consulta")
            }

            total = result_.length

            let response = {
                products: result,
                total: total
            }
            res.send(JSON.stringify(response))
        })
    })

}


const searchCategory = (req, res) => {
    let sql = "SELECT * FROM category"

    pool.query(sql, function (error, result, fields) {
        if (error) {
            return res.status(404).send("Hubo un error en la consulta")
        }

        let response = {
            category: result
        }

        res.send(JSON.stringify(response))
    })
}



module.exports = {
    searchCategory,
    searchProducts
}