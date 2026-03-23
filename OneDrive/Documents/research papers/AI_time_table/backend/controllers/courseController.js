const Course = require("../models/Course");

// ✅ CREATE COURSE (SAVE TO DB)
exports.createCourse = async (req, res) => {
  try {
    const {
      course_code,
      course_name,
      program_id,
      semester_id,
      hours_per_week,
      course_type
    } = req.body;

    // validation
    if (
      !course_code ||
      !course_name ||
      !program_id ||
      !semester_id ||
      !hours_per_week ||
      !course_type
    ) {
      return res.status(400).json({ message: "All fields required" });
    }

    const course = new Course({
      course_code,
      course_name,
      program_id,
      semester_id,
      hours_per_week,
      course_type
    });

    await course.save();

    res.json({
      message: "Course created successfully",
      course
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET COURSES
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching courses" });
  }
};