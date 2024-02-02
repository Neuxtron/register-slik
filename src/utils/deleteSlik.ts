import db from "../database"

async function deleteSlik(id: number) {
  const sql = "DELETE FROM slik WHERE id=$1"
  await db.execute(sql, [id])
}

export default deleteSlik