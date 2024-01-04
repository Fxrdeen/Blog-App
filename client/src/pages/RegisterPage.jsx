import React from "react";
import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    const respone = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (respone.status === 200) {
      alert("Registration was successful");
    } else {
      alert("registration failed");
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <label htmlFor="user">Enter Your Username</label>
      <input
        type="text"
        name="user"
        id="user"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label htmlFor="user">Enter Your Password</label>
      <input
        type="password"
        name="user"
        id="user"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
