const router = require("express").Router();
const userController = require('../controllers/app.controllers')



router.get("/",userController.home);

module.exports = router;