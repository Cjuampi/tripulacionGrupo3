const router = require('express').Router();
const pagesCntrll = require('../controllers/pages.controller')
const useraccsCntrll = require('../controllers/useraccs.controller')



//router.get("/",pagesCntrll.home);
router.post("/logIn",useraccsCntrll.postLogin);
router.post("/signUp", useraccsCntrll.postSignUp);


router.post("/fndWrdAllEvnt", pagesCntrll.findWrdAllEvnt);
router.post("/fndDestEvent", pagesCntrll.findDestacados);
router.post("/fndDetailEvent", pagesCntrll.getDetailEvent);
router.post("/comments",pagesCntrll.setComments);
router.post("/findUser",pagesCntrll.getUser);
router.post("/fndCommentsEvent",pagesCntrll.getComments);

module.exports = router;