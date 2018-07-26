let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/')
  .get(controllers.getFood)


module.exports = router
