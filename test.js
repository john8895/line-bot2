var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'apai01',
    password: '123456',
    port: '3306',
    database: 'wannaeat'
})

connection.connect()

var sql = 'SELECT * FROM store;'

// connection.query('SELECT 1 + 1 AS solution', function (error, result, fields){
//     if(error) throw error
//     console.log('The solution is ', result[0].solution)
// })

connection.query(sql, function(error, result, fields){
    if(error) throw error
    console.log(result)
})

connection.end()

