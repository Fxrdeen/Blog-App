import React from "react";

const LoginPage = () => {
  return (
    <form className="login">
      <label htmlFor="user">Enter Your Username</label>
      <input type="text" name="user" id="user" />
      <label htmlFor="user">Enter Your Password</label>
      <input type="password" name="user" id="user" />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
