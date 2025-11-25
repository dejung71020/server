import { config } from "../config.mjs";
import MongoDB from "mongodb";

let db;

export async function connectDB() {
  const client = await MongoDB.MongoClient.connect(config.db.host);
  db = client.db(); // 기본 DB 선택
  return db;
}
