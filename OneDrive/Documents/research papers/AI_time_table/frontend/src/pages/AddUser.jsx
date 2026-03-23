import { useEffect, useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("TEACHER");

  // ✅ LOAD USERS (NO WARNING)
  useEffect(() => {
    const loadUsers = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUsers(res.data);
      } catch (err) {
        console.log(err);
        alert("Failed to load users");
      }
    };

    loadUsers();
  }, []);

  // ✅ SAVE USER
  const saveUser = async () => {
    const token = localStorage.getItem("token");

    if (!name || !email) {
      alert("All fields required");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/users/add",
        {
          name,
          email,
          password: "123456", // required
          role
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("User added successfully");

      setName("");
      setEmail("");
      setRole("TEACHER");

      // 🔄 reload users
      const res = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUsers(res.data);

    } catch (err) {
      console.log(err);
      alert("Error saving user");
    }
  };

  return (
    <div className="content-wrapper">
      <h2>Add User</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="TEACHER">TEACHER</option>
        <option value="HOD">HOD</option>
        <option value="STUDENT">STUDENT</option>
      </select>

      <br /><br />

      <button onClick={saveUser}>Save</button>

      <hr />

      <h3>Users</h3>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((u) => (
          <div key={u._id}>
            {u.name} - {u.email} ({u.role})
          </div>
        ))
      )}
    </div>
  );
}