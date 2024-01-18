import db from "../database"
import { Slik } from "./slik"

async function fetchSlik(): Promise<Slik[]> {
  const sql = "SELECT * FROM slik"
  const raw: any[] = await db.select(sql)
  const data: Slik[] = raw.map((slik) => {
    const newSlik = {
      ...slik,
      tanggal: new Date(slik.tanggal),
      noSlik: slik.no_slik
    }
    delete newSlik.no_slik
    return newSlik
  })
  return data
}

export default fetchSlik