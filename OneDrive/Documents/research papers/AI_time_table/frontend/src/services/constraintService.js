import axios from "axios";

const BASE = "http://localhost:5000/api";

export const getConstraintMaster = () =>
  axios.get(`${BASE}/constraint-master`);

export const saveConstraints = (data) =>
  axios.post(`${BASE}/constraints/add`, data);

export const getConstraints = () =>
  axios.get(`${BASE}/constraints`);