import db from "../database"

function getLocalData() {
  const raw = localStorage.getItem("CURR_NO_SLIK")
  if (raw === null) return null
  return parseInt(raw)
}

 async function getNoSlik(): Promise<number> {
  let currNoSlik = getLocalData()

  if (currNoSlik == null) {
    const sql = "SELECT no_slik FROM slik ORDER BY tanggal DESC"
    const data: any[] = await db.select(sql)
    const listNoSlik: number[] = data.map(slikObj => {
      return slikObj.no_slik
    })
    
    currNoSlik = listNoSlik[0] ?? -1
  }

  return currNoSlik + 1
}

export default getNoSlik
