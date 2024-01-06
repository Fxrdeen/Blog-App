import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  if (!postInfo) return <div>Nothing</div>;
  return (
    <div className="post-page">
      <div className="image-p">
        <img
          className="image-p"
          src={`http://localhost:4000/${postInfo.cover}`}
          alt="nigga"
        />
      </div>
      <h1>{postInfo.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        praesentium cumque perferendis, enim repellendus architecto blanditiis
        iure nisi ut temporibus voluptates corporis assumenda adipisci fugiat
        non id nostrum illo cum?
      </div>
    </div>
  );
};

export default PostPage;
