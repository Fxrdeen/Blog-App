import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
const format = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
];
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  function createNewPost(e) {
    e.preventDefault();
    const data = new FormData();
    fetch("http://localhost:4000/post", {
      method: "POST",
    });
  }
  return (
    <form onSubmit={createNewPost}>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="title"
        placeholder="Title"
      />
      <input
        value={summary}
        onChange={(e) => {
          setSummary(e.target.value);
        }}
        type="summary"
        placeholder="Summary"
      />
      <input type="file" />
      <ReactQuill
        value={content}
        onChange={(e) => {
          setContent(e);
        }}
        formats={format}
      />
      <button style={{ marginTop: "10px" }}>Create Post</button>
    </form>
  );
};

export default CreatePost;
