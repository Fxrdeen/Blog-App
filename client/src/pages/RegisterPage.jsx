import React from "react";

const RegisterPage = () => {
  return (
    <form className="register">
      <label htmlFor="user">Enter Your Username</label>
      <input type="text" name="user" id="user" />
      <label htmlFor="user">Enter Your Password</label>
      <input type="password" name="user" id="user" />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
