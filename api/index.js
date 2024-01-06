const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleWare = multer({ dest: "uploads/" });
const Post = require("./models/Post");
const fs = require("fs");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
mongoose.connect(
  "mongodb+srv://blog:blog@cluster0.yqlrgyn.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  if (userDoc === null) {
    res.status(400).json("wrong");
  } else {
    res.status(200).json("correct");
  }
});

app.post("/post", uploadMiddleWare.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  res.json({ files: req.file });
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  const { title, summary, content } = req.body;
  const postDoc = await Post.create({
    title,
    summary,
    content,
    cover: newPath,
  });
});

app.get("/post", async (req, res) => {
  res.json(await Post.find());
});

app.get("/post/:id", async (req, res) => {
  const postDoc = await Post.findById(req.params.id);
  res.json(postDoc);
});

app.listen(4000);
