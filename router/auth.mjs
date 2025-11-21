// router/auth.mjs
import express from "express";
import * as authController from "../controller/auth.mjs";

const router = express.Router();

// 회원가입 정보 불러오기
router.get("/", authController.getUsers);

// 회원가입
router.post("/signup", authController.signupAuth);

// 로그인
router.post("/login", authController.loginAuth);

// 로그인 검사
export default router;
