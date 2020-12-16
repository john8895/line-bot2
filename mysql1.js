var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'apai01',
    password: '123456',
    port: '3306',
    database: 'linebot1',
})

connection.connect()

var addSql = 'INSERT INTO websites (Id, name, url, alexa, country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鳥工具', 'https://c.runoob.com', '23453', 'CN'];

connection.query(addSql, addSqlParams, function(error,result){
    if(error){
        console.log('[INSERT ERROR]:', error.message)
        return;
    }

    console.log('----------------------------INSERT----------------------------')
    console.log('INSERT ID:', result);
    console.log('--------------------------------------------------------------')
})

connection.end()