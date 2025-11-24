// data/auth.mjs
let users = [
  {
    id: "1",
    userid: "apple",
    password: "1111",
    name: "김사과",
    email: "apple@apple.com",
    url: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: "2",
    userid: "banana",
    password: "2222",
    name: "반하나",
    email: "banana@banana.com",
    url: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    userid: "orange",
    password: "3333",
    name: "오렌지",
    email: "orange@orange.com",
    url: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "4",
    userid: "berry",
    password: "4444",
    name: "배애리",
    email: "orange@orange.com",
    url: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: "5",
    userid: "melon",
    password: "5555",
    name: "이메론",
    email: "orange@orange.com",
    url: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

export async function signup(userid, password, name, email) {
  const user = {
    id: Object.keys(users).length + 1,
    userid,
    password,
    name,
    email,
    url: "에라잇아무거나 넣어",
  };
  users = [user, ...users];

  return user;
}

export async function getAll() {
  return users;
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
  const user = users.find((user) => user.userid === userid);
  return user;
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

// export async function loginUser(userid, password) {
//   const user = users.find(
//     (user) => user.userid === userid && user.password === password
//   );
//   return user;
// }
