import axios from "axios";
export async function checkemail({ email, password }) {
  const response = await axios.post("http://localhost:3000/api/login", {
    email: email,
    password: password,
  });

  if (response.status != 200) {
    console.trace(response.data);
  }
  const data = await response.data;
  return data;
}
export async function formregister(registerables) {
  const { email, password, fullname, gender, dob, username } = registerables;
  const data = await axios.post("http://localhost:3000/api/register", {
    fullname: fullname,
    username: username,
    dob: dob,
    email: email,
    password: password,
    gender: gender,
  });
  if (data.status != 200) {
    console.log("Error in formregister");
  }
  return data;
}
