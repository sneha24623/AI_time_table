const express = require("express");
const router = express.Router();
const controller = require("../controllers/departmentController");

router.post("/", controller.addDepartment);
router.get("/", controller.getDepartments);

module.exports = router;