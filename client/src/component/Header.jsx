import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  useEffect(() => {
    fetch("http://localhost:4000/profile", {});
  }, []);
  return (
    <header>
      <a href="" className="logo">
        <Link to={"/"}>MyBlog</Link>
      </a>
      <nav>
        <a href="">
          {" "}
          <Link to={`/login`}>Login</Link>{" "}
        </a>
        <a href="">
          {" "}
          <Link to={`/register`}>Register</Link>{" "}
        </a>
      </nav>
    </header>
  );
};
