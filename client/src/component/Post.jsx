import React from "react";

export const Post = () => {
  const date = new Date();
  const time = date.toLocaleDateString();
  return (
    <div className="post">
      <div className="image">
        <img src="https://picsum.photos/600" alt="" />
      </div>
      <div className="content">
        <h2>Some niggas came to My house</h2>
        <a href="" className="author">
          Fxrdeen Shaikh
        </a>
        <time>{time}</time>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          nihil enim aspernatur ab minus quo magni placeat sapiente, ratione
          deleniti ducimus iure doloremque necessitatibus, inventore illum
          consequuntur beatae distinctio labore!
        </p>
      </div>
    </div>
  );
};
