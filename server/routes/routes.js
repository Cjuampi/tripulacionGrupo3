const router = require("express").Router();
const userController = require('../controllers/app.controllers')
const useraccsCntrll = require('../controllers/useraccs.controller')



router.get("/",userController.home);
router.post("/login",useraccsCntrll.postLogin)
router.post("/singUp", useraccsCntrll.postSingUp)

module.exports = router;