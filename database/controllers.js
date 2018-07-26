const axios = require('axios')


exports.getFood = (req, res) => {
  let maxCalorie = req.query.maxCalorie
  let ingredientCount = req.query.ingredientCount 
  let foodSearch = req.query.foodSearch || 'chicken+nugget'
  axios.get(`https://api.edamam.com/search?q=${foodSearch}&app_id=c480be11&app_key=3698e66e727046d55c004bdd9eb8c5b6&from=0&to=5&calories=0-${maxCalorie}&ingr=${ingredientCount}`)
  // axios.get('https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=a961081d&app_key=668db30e68facd688b3b0e2923ccf365')
  .then(response => res.send(response.data.hits))
  .catch(err => console.error(err))
}
