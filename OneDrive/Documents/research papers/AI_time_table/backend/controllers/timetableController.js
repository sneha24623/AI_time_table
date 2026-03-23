const { spawn } = require("child_process");

const Course = require("../models/Course");
const DeptSlot = require("../models/DeptTimeSlot");
const Room = require("../models/Room");
const Timetable = require("../models/ClassTimetable");
const Semester = require("../models/Semester");
const CourseTeacherMap = require("../models/CourseTeacherMap");

exports.generateTimetable = async (req, res) => {
  try {
    const { programId, semesterId, batchYear } = req.body;

    console.log("REQ BODY:", req.body);

    // 🔥 Get semester
    const semesterDoc = await Semester.findById(semesterId);
    if (!semesterDoc) {
      return res.status(400).json({ message: "Semester not found" });
    }

    // 🔥 Get data
    const courses = await Course.find({ semester_id: semesterId });
    const slots = await DeptSlot.find();
    const rooms = await Room.find();
    const mappings = await CourseTeacherMap.find();

    if (!courses.length) {
      return res.status(400).json({
        message: "No courses found for this semester"
      });
    }

    if (!slots.length || !rooms.length) {
      return res.status(400).json({
        message: "Please add rooms and time slots first"
      });
    }

    // 🔥 CALL PYTHON (GENETIC AI)
    const py = spawn("python", ["ai/engine.py"]);

    py.stdin.write(
      JSON.stringify({
        courses,
        slots,
        rooms,
        mappings
      })
    );
    py.stdin.end();

    let output = "";

    py.stdout.on("data", (data) => {
      output += data.toString();
    });

    py.stderr.on("data", (data) => {
      console.log("PYTHON ERROR:", data.toString());
    });

    py.on("close", async () => {
      try {
        const result = JSON.parse(output || "[]");

        // 🔥 Delete old timetable
        await Timetable.deleteMany({
          program_id: programId,
          semester_id: semesterId,
          batch_year: batchYear
        });

        // 🔥 Save new timetable
        const saved = await Timetable.insertMany(
          result.map((r) => {
            const slotObj = slots.find(
              s => String(s._id) === String(r.slot_id)
            );

            const courseObj = courses.find(
              c => String(c._id) === String(r.course_id)
            );

            const roomObj = rooms.find(
              room => String(room._id) === String(r.room_id)
            );

            return {
              program_id: programId,
              semester_id: semesterId,
              batch_year: batchYear,
              day: r.day,
              slot: slotObj ? slotObj.slot_label : "",
              course: courseObj ? courseObj.course_name : "",
              room: roomObj ? roomObj.room_name : "",
              user_id: r.user_id || ""   // ✅ teacher assigned from AI
            };
          })
        );

        res.json(saved);

      } catch (err) {
        console.log("SAVE ERROR:", err);
        res.status(500).json({ message: "Error saving timetable" });
      }
    });

  } catch (err) {
    console.log("SERVER ERROR:", err);
    res.status(500).json({ message: "Generation failed" });
  }
};