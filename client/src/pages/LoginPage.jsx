import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Login was successful");
      setRedirect(true);
    } else {
      alert("User not found");
    }
  }

  if (redirect) {
    return <Navigate to={"/loggedin"} />;
  }
  return (
    <form className="login" onSubmit={login}>
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
        required
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
