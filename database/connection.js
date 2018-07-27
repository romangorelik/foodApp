let mysql = require('mysql')

let connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'foodApp'
})

connection.connect((err) => {
  if (err) console.error(err)
  else console.log('MySQL connected')
})

exports.connection = connection
