import { Slik } from "./slik"
import db from "../database"

async function insertSlik(slik: Slik) {
  const sql =
  "INSERT INTO slik (tanggal, nama, no_slik, nik) VALUES ($1, $2, $3, $4)"
  await db.execute(sql, [slik.tanggal, slik.nama, slik.noSlik, slik.nik])
}

export default insertSlik
