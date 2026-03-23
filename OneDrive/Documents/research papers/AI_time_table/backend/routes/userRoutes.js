const express = require("express");
const router = express.Router();

const {
  addUser,
  getUsers,
  deleteUser,
  getTeachersByDept
} = require("../controllers/userController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// 🔒 ADMIN only
router.post("/add", addUser);
router.get("/", getUsers);
router.delete("/:id", deleteUser);

// 🔒 protected
router.get("/teachers/:deptId", auth, getTeachersByDept);

module.exports = router;