let router = require('express').Router()
let controllers = require('./controllers.js')

router.route('/')
  .get(controllers.getFood)

router.route('/commented')
  .get(controllers.getComments)
  .post(controllers.postComment)


module.exports = router
