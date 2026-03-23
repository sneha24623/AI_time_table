const Department = require("../models/Department");

// ✅ ADD DEPARTMENT
exports.addDepartment = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // 🔥 DEBUG

    const { dept_name } = req.body;

    if (!dept_name) {
      return res.status(400).json({
        message: "Department name required"
      });
    }

    const dept = new Department({ dept_name });

    await dept.save();

    res.json({
      message: "Department added",
      dept
    });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({
      message: "Server error"
    });
  }
};

// ✅ GET ALL
exports.getDepartments = async (req, res) => {
  try {
    const data = await Department.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching departments"
    });
  }
};