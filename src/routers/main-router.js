const { Router } = require("express");
const router = Router();
module.exports = router;

const mainController = require("../controllers/main-controller");

//MiddleWares
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/", mainController.logIn);
router.post("/", mainController.processLogIn);

router.get("/home", authMiddleware, mainController.home);

//filter Applicants
router.post("/filterApplicants", authMiddleware, mainController.filterApplicants)
router.get("/filterApplicants", authMiddleware, mainController.filterApplicants)


