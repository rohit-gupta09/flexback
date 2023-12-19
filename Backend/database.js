const Pool=require('pg').Pool
// const pool=new Pool({
//     user:"postgres",
//     password:"zTN9MNDq@1",
//     host:"localhost",
//     port:5432,
//     database:"flexmoney"
// })
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  })
module.exports = pool;