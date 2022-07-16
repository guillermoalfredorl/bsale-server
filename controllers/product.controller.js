import pool from '../config/db.js';

export const searchProducts = (req, res) => {
  const { name, category, page, quantity, order } = req.query;
  let sql = 'SELECT * FROM product';
  let sql_;
  let total;

  if (name && category) {
    sql += ` WHERE name LIKE \'\%${name}\%\' AND category = ${category}`;
  } else if (name) {
    sql += ` WHERE name LIKE \'\%${name}\%\'`;
  } else if (category) {
    sql += ` WHERE category = ${category}`;
  }

  if (order === 'price-ASC') {
    sql += ` ORDER BY price ASC`;
  } else if (order === 'price-DESC') {
    sql += ` ORDER BY price DESC`;
  }

  sql_ = sql;

  sql += ` LIMIT ${(page - 1) * quantity}, ${quantity}`;

  pool.query(sql, (error, result, fields) => {
    if (error) {
      console.log(fields);
      return res.status(404).send('Hubo un error en la consulta');
    }
    pool.query(sql_, (error_, result_, field_) => {
      if (error_) {
        return res.status(404).send('Hubo un error en la consulta');
      }

      total = result_.length;

      let response = {
        products: result,
        total: total,
      };
      res.send(JSON.stringify(response));
    });
  });
};
