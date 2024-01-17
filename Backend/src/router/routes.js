const router = require("express").Router();

const Usercontrollers = require("./../controllers/userControllers");

router.get("/meal", Usercontrollers.getData);
router.delete("/meal/:id", Usercontrollers.getDelete);
router.post("/meal", Usercontrollers.getPost);

module.exports = router;
