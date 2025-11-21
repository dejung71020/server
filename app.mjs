// app.mjs
import express from "express";
import postRouter from "./router/posts.mjs";
import authRouter from "./router/auth.mjs";

const app = express();

app.use(express.json());

app.use("/post", postRouter);

app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(8080, () => {
  console.log("서버 실행중");
});
