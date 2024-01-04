import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const HeaderLog = () => {
  return (
    <header>
      <a href="" className="logo">
        <Link to={"/loggedin"}>MyBlog</Link>
      </a>
      <nav>
        <a href="">
          {" "}
          <Link to={`/createpost`}>Create a Post</Link>{" "}
        </a>
        <a href="">
          {" "}
          <Link to={`/`}>Logout</Link>{" "}
        </a>
      </nav>
    </header>
  );
};
