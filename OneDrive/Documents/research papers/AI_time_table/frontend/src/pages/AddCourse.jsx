import { useEffect, useState } from "react";
import axios from "axios";

export default function AddCourse() {
  const [programs, setPrograms] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [courses, setCourses] = useState([]);

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [programId, setProgramId] = useState("");
  const [semesterId, setSemesterId] = useState("");
  const [hours, setHours] = useState("");
  const [type, setType] = useState("THEORY");

  const token = localStorage.getItem("token");

  // ✅ LOAD DATA
  const loadData = async () => {
    try {
      const progRes = await axios.get("http://localhost:5000/api/programs", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const semRes = await axios.get("http://localhost:5000/api/semesters/all", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const courseRes = await axios.get("http://localhost:5000/api/courses", {
        headers: { Authorization: `Bearer ${token}` }
      });

      setPrograms(progRes.data);
      setSemesters(semRes.data);
      setCourses(courseRes.data);

    } catch (err) {
      console.log(err);
      alert("Failed to load data");
    }
  };

  // ✅ useEffect
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ SAVE COURSE
  const handleSave = async () => {
    if (!courseName || !courseCode || !programId || !semesterId || !hours) {
      alert("All fields required");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/courses/add",
        {
          course_name: courseName,
          course_code: courseCode,
          program_id: programId,
          semester_id: semesterId,
          hours_per_week: Number(hours),
          course_type: type
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert("Course added successfully");

      // reset form
      setCourseName("");
      setCourseCode("");
      setProgramId("");
      setSemesterId("");
      setHours("");
      setType("THEORY");

      // refresh data
      loadData();

    } catch (err) {
      console.log(err);
      alert("Error adding course");
    }
  };

  return (
    <div className="content-wrapper">

      {/* HEADER */}
      <h2 className="page-title">Add Course</h2>
      <p className="page-desc">Create and manage courses</p>

      {/* FORM CARD */}
      <div className="form-card">
        <div className="form-grid">

          <div className="form-group">
            <label>Course Name</label>
            <input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Enter course name"
            />
          </div>

          <div className="form-group">
            <label>Course Code</label>
            <input
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              placeholder="Enter course code"
            />
          </div>

          <div className="form-group">
            <label>Program</label>
            <select
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
            >
              <option value="">Select Program</option>
              {programs.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.program_name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Semester</label>
            <select
              value={semesterId}
              onChange={(e) => setSemesterId(e.target.value)}
            >
              <option value="">Select Semester</option>
              {semesters.map((s) => (
                <option key={s._id} value={s._id}>
                  Semester {s.semester_number}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Hours per Week</label>
            <input
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="Enter hours"
            />
          </div>

          <div className="form-group">
            <label>Course Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="THEORY">THEORY</option>
              <option value="LAB">LAB</option>
            </select>
          </div>

          <div className="form-actions">
            <button className="primary-btn" onClick={handleSave}>
              Save Course
            </button>
          </div>

        </div>
      </div>

      {/* TABLE CARD */}
      <div className="table-card">
        <h3 className="table-title">Courses</h3>

        {courses.length === 0 ? (
          <p>No courses found</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Program</th>
                <th>Semester</th>
                <th>Hours</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((c, i) => (
                <tr key={c._id}>
                  <td>{i + 1}</td>

                  <td>
                    {c.course_code} – {c.course_name}
                  </td>

                  <td>
                    {typeof c.program_id === "object"
                      ? c.program_id?.program_name
                      : c.program_id}
                  </td>

                  <td>
                    {typeof c.semester_id === "object"
                      ? `Sem ${c.semester_id?.semester_number}`
                      : c.semester_id}
                  </td>

                  <td>{c.hours_per_week}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}