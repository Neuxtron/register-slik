import db from "../database"
import { Slik } from "./slik"

async function updateSlik(slik: Slik) {
  const sql =
  "UPDATE slik SET tanggal=$1, nama=$2, no_slik=$3, nik=$4 WHERE id=$5"
  await db.execute(sql, [slik.tanggal, slik.nama, slik.noSlik, slik.nik, slik.id])
}

export default updateSlik