// data/auth.mjs
import { db } from "../db/database.mjs";

export async function signup(user) {
  const { userid, password, name, email, url } = user;
  return db
    .execute(
      "INSERT INTO users (userid, password, name, email, url) VALUES (?, ?, ?, ?, ?)",
      [userid, password, name, email, url]
    )
    .then((result) => result[0].insertId);
}

export async function getAll() {
  return db.execute("SELECT * FROM users").then((result) => result[0]);
}

export async function login(id, password) {
  // 1. 아이디로 사용자 조회
  const user = users.find((u) => u.userid === id);

  if (!user) {
    return { auth: false, err: "id 가 존재하지 않음" };
  }

  // 2. 비밀번호 체크
  if (user.password !== password) {
    return { auth: false, err: "password 가 틀림" };
  }

  // 3. 둘 다 맞을 때
  return { auth: true, err: null };
}

export async function findByUserid(userid) {
  return db
    .execute("SELECT idx, password FROM users WHERE userid=?", [userid])
    .then((result) => {
      console.log(result);
      return result[0][0];
    });
}

export async function findById(idx) {
  return db
    .execute("SELECT idx, userid FROM users WHERE idx=?", [idx])
    .then((result) => result[0][0]);
}

// export async function loginUser(userid, password) {
//   const user = users.find(
//     (user) => user.userid === userid && user.password === password
//   );
//   return user;
// }
