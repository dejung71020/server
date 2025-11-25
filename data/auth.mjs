// data/auth.mjs
import MongoDB from "mongodb";
import { getUsers } from "../db/database.mjs";

const ObjectID = MongoDB.ObjectId;

export async function signup(user) {
  return getUsers()
    .insertOne(user)
    .then((result) => result.insertedId.toString());
}

export async function getAll() {
  const users = await getUsers().find().toArray();
  return users;
}

export async function findByUserid(userid) {
  return getUsers().find({ userid }).next().then(mapOptionalUser);
}

export async function findById(id) {
  return getUsers()
    .find({ _id: new ObjectID(id) })
    .next()
    .then(mapOptionalUser);
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}

// export async function loginUser(userid, password) {
//   const user = users.find(
//     (user) => user.userid === userid && user.password === password
//   );
//   return user;
// }
