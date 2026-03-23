const express = require("express");
const router = express.Router();

const controller = require("../controllers/courseController");

router.post("/add", controller.createCourse);
router.get("/", controller.getCourses);

module.exports = router;