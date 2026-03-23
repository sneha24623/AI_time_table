const CourseTeacherMap = require("../models/CourseTeacherMap");

// ✅ SAVE TO DB
exports.addMapping = async (req, res) => {
  try {
    const { course_id, user_id, batch_year } = req.body;

    if (!course_id || !user_id || !batch_year) {
      return res.status(400).json({ message: "All fields required" });
    }

    const mapping = new CourseTeacherMap({
      course_id,
      user_id,
      batch_year
    });

    await mapping.save();

    res.json({
      message: "Mapping saved successfully",
      mapping
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET
exports.getMappings = async (req, res) => {
  const data = await CourseTeacherMap.find()
    .populate("course_id", "course_name")
    .populate("user_id", "name");

  res.json(data);
};