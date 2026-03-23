const Constraint = require("../models/Constraint");
const ConstraintMaster = require("../models/ConstraintMaster");


// ✅ ADD CONSTRAINT (FIXED)
exports.addConstraints = async (req, res) => {
  try {
    const data = req.body;

    // ✅ IF ARRAY (from frontend)
    if (Array.isArray(data)) {

  const formatted = data.map(item => ({
    dept_id: item.dept_id,
    program_id: item.program_id,
    batch_year: item.batch_year,
    constraint_id: item.constraint_id,
    constraint_value: item.constraint_value || ""
  }));

  await Constraint.insertMany(formatted);

  return res.json({
    message: "Constraints saved successfully",
    count: formatted.length
  });
}

    // ✅ IF SINGLE OBJECT
    const {
      dept_id,
      program_id,
      batch_year,
      constraint_id,
      constraint_value
    } = data;

    if (!dept_id || !program_id || !batch_year || !constraint_id) {
      return res.status(400).json({ message: "All fields required" });
    }

    const constraint = new Constraint({
      dept_id,
      program_id,
      batch_year,
      constraint_id,
      constraint_value
    });

    await constraint.save();

    res.json({
      message: "Constraint saved successfully",
      constraint
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET ALL
exports.getConstraints = async (req, res) => {
  try {
    const data = await Constraint.find()
      .populate("dept_id", "dept_name")
      .populate("program_id", "program_name")
      .populate("constraint_id", "constraint_name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching constraints" });
  }
};