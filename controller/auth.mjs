// controller/auth.mjs
import express from "express";
import * as authRepository from "../data/auth.mjs";

export async function getUsers(req, res, next) {
  const data = await authRepository.getAll();
  res.status(200).json(data);
}

export async function signupAuth(req, res, next) {
  const { userid, password, name, email } = req.body;
  const auth = await authRepository.signup(userid, password, name, email);
  if (auth) {
    res.status(200).json({ message: "회원가입 되었습니다." });
  } else {
    res.status(404).json({ message: "회원가입 오류" });
  }
}

export async function loginAuth(req, res, next) {
  const { userid, password } = req.body;
  const { auth, err } = await authRepository.login(userid, password);
  if (auth) {
    res.status(200).json({ message: `${userid}님 로그인 되었습니다.` });
  } else {
    res.status(404).json({ message: `${err}` });
  }
}

// export async function login(req, res, next) {
//   const { userid, password } = req.body;
//   const user = await AR.loginUser(userid, password);
//   if (user) {
//     res.status(200).json({ message: `${userid}님 로그인 되었습니다.` });
//   } else {
//     res
//       .status(404)
//       .json({ message: `${userid}님 아이디 또는 비밀번호가 맞지 않습니다.` });
//   }
// }
