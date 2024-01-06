import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ _id, title, summary, content, cover }) => {
  const date = new Date();
  const time = date.toLocaleDateString();
  return (
    <div className="post">
      <div className="image">
        <Link to={`/loggedin/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="content">
        <Link to={`/loggedin/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <a href="" className="author">
          Fxrdeen Shaikh
        </a>
        <time>{time}</time>
        <p>
          {summary} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Pariatur ratione explicabo expedita vero iste cumque sequi sint rem,
          sit consectetur et illo nobis odit, iure aperiam, fuga eaque ab
          eveniet?
        </p>
      </div>
    </div>
  );
};
