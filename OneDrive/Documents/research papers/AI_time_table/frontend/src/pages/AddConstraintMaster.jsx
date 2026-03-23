import { useState, useEffect } from "react";

function ConstraintMaster() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("class");
  const [masters, setMasters] = useState([]);

  // ✅ FETCH
  useEffect(() => {
    fetch("http://localhost:5000/api/constraint-master")
      .then(res => res.json())
      .then(data => {
        console.log("MASTERS:", data);
        setMasters(data);
      });
  }, []);

  // ✅ SAVE
  const handleSave = async () => {
    await fetch("http://localhost:5000/api/constraint-master/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        constraint_name: name,
        constraint_category: category
      })
    });

    alert("Constraint Master Added");

    // 🔥 reload list
    const res = await fetch("http://localhost:5000/api/constraint-master");
    const data = await res.json();
    setMasters(data);

    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Constraint Master</h2>

      <input
        value={name}
        placeholder="Constraint Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="class">Class</option>
        <option value="exam">Exam</option>
        <option value="invigilator">Invigilator</option>
      </select>

      <br /><br />

      <button onClick={handleSave}>Save</button>

      <hr />

      <h3>Available Constraint Masters</h3>

      {masters.map((m) => (
        <div key={m._id}>
          {m.constraint_name} ({m.constraint_category})
        </div>
      ))}
    </div>
  );
}

export default ConstraintMaster;