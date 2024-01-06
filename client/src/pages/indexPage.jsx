import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Post } from "../component/Post";

const IndexPage = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPost(posts);
      });
    });
  }, []);
  return <>{post.length > 0 && post.map((post) => <Post {...post} />)}</>;
};

export default IndexPage;
