const router = require('express').Router();
const pagesCntrll = require('../controllers/pages.controller')
const useraccsCntrll = require('../controllers/useraccs.controller')



router.get("/",pagesCntrll.home);
router.post("/logIn",useraccsCntrll.postLogin)
router.post("/singUp", useraccsCntrll.postSingUp)
router.get("/token",useraccsCntrll.getCookie)



module.exports = router;