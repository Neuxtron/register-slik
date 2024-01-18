// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri_plugin_sql::{Migration, MigrationKind};

fn main() {
  let migrations = vec![
    Migration {
      version: 1,
      description: "create_initial_tables",
      // OPTIMIZE: next time use camel case for naming columns
      sql:
      "CREATE TABLE slik (
        id INTEGER PRIMARY KEY,
        tanggal DATETIME,
        nama varchar(255),
        no_slik int(11),
        nik varchar(255)
      );",
      kind: MigrationKind::Up
    }
  ];

  tauri::Builder::default()
    .plugin(
      tauri_plugin_sql::Builder::default()
        .add_migrations("sqlite:slit_dev.db", migrations)
        .build()
    )
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
