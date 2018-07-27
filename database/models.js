let db = require('./connection.js')

module.exports = {
  getAllComments: () => {
    return new Promise((resolve, reject) => {
      db.connection.query('SELECT * FROM recipe', (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  },
  postOneComment: (food) => {
    return new Promise((resolve, reject) => {
      db.connection.query('INSERT INTO recipe (image, label, dietLabel, calories, comment) VALUE (?, ?, ?, ?, ?)', [food.image, food.label, food.dietLabel, food.calories, food.comment], (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }
}
