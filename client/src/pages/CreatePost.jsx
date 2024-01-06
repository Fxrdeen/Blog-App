import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import { Navigate } from "react-router-dom";
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
  const [direct, setDirect] = useState(false);
  const [file, setFile] = useState("");
  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", file[0]);
    e.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      setDirect(true);
    }
  }
  if (direct) {
    return <Navigate to={"/loggedin"} />;
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
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files);
        }}
      />
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
