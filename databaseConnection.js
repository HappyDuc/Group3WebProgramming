const { createPool } = require('mysql');

// Create a connection pool to the database
const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'menu_info',
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL as ID:', connection.threadId);
  connection.release();
});

//Testing a query

pool.query('select * from foodcontent', (err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

module.exports = pool;
