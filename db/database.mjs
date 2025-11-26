import { config } from "../config.mjs";
import Mongoose from "mongoose";
// import MongoDB from "mongodb";

// let db;

export async function connectDB() {
  return Mongoose.connect(config.db.host, { dbName: "AI" });
}

// 스키마 기능추가
// _id 값을 문자열로 변환한 id 변수 생성
// JSON 또는 객체 변환시 id 변수(virtual) 도 포함
export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtual: true });
  schema.set("toObject", { virtual: true });
}
