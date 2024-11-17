const {
    createPool
} = require('mysql')

// Create a connection to the database
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'menu_info',
});

//Testing a query

pool.query('select * from foodcontent', (err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})