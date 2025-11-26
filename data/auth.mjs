// data/auth.mjs
import Mongoose from "mongoose";
import { useVirtualId } from "../db/database.mjs";

// versionKey : Mongoose 가 문서를 저장할 때 자동으로 추가하는 _v 라는 필드를 설정/해제
const userSchema = new Mongoose.Schema(
  {
    userid: { type: String, require: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    url: String,
  },
  { versionKey: false }
);

useVirtualId(userSchema);
const User = Mongoose.model("User", userSchema);

export async function signup(user) {
  return new User(user).save().then((data) => data.id);
}

export async function getAll() {
  const users = await getUsers().find().toArray();
  return users;
}

export async function findByUserid(userid) {
  return User.findOne({ userid });
}

export async function findById(id) {
  return User.findById(id);
}

// export async function loginUser(userid, password) {
//   const user = users.find(
//     (user) => user.userid === userid && user.password === password
//   );
//   return user;
// }
