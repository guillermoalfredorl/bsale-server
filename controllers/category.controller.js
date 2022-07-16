import pool from '../config/db.js';

export const searchCategory = (req, res) => {
  let sql = 'SELECT * FROM category';

  pool.query(sql, (error, result, fields) => {
    if (error) {
      console.log(error);
      return res.status(404).send(error);
    }

    let response = {
      category: result,
    };
    res.send(JSON.stringify(response));
  });
};
