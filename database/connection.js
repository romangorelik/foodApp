let mysql = require('mysql')

let connection = mysql.createConnection({
  host: 'recipedb1.cgr0mmokdcfj.us-east-1.rds.amazonaws.com',
  
  port: '3306',
  user: 'romanroman1',
  password: 'romanana4',
  database: 'recipedb1'
})

connection.connect((err) => {
  if (err) console.error(err)
  else console.log('MySQL connected')
})

exports.connection = connection
