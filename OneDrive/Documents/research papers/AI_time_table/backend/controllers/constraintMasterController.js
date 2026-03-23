const ConstraintMaster = require("../models/ConstraintMaster");

// ✅ ADD
exports.addConstraintMaster = async (req, res) => {
  try {
    const { constraint_name, constraint_category } = req.body;

    if (!constraint_name || !constraint_category) {
      return res.status(400).json({ message: "All fields required" });
    }

    const constraint = new ConstraintMaster({
      constraint_name,
      constraint_category
    });

    await constraint.save();

    res.json({
      message: "Constraint Master created",
      constraint
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET
exports.getConstraintMasters = async (req, res) => {
  try {
    const data = await ConstraintMaster.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching constraint masters" });
  }
};