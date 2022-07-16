import { createPool } from 'mysql';

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
});

export default pool;
