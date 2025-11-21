// router/auth.mjs
import express from "express";
import * as authController from "../controller/auth.mjs";
import { body } from "express-validator";
import { validate } from "../middleware/validator.mjs";

const router = express.Router();

const validateLogin = [
  body("userid")
    .trim()
    .isLength({ min: 4 })
    .withMessage("최소 4자이상 입력")
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage("특수문자 사용불가"),
  body("password").trim().isLength({ min: 4 }).withMessage("최소 4자이상 입력"),
  validate,
];

const validateSignup = [
  ...validateLogin,
  body("name").trim().notEmpty().withMessage("name을 입력"),
  body("email").trim().isEmail().withMessage("email 형식 확인"),
  validate,
];
// 회원가입 정보 불러오기
router.get("/", authController.getUsers);

// 회원가입
router.post("/signup", validateSignup, authController.signupAuth);

// 로그인
router.post("/login", validateLogin, authController.loginAuth);

// 로그인 검사
export default router;
