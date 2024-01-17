import Database from "tauri-plugin-sql-api"

const db = await Database.load("sqlite:slit_dev.db")

export default db
