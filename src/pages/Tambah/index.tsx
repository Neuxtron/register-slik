import { FormEvent } from "react"
import TambahInput from "./TambahInput"
import styles from "./styles.module.scss"

function TambahPage() {
  const onTambah = (event: FormEvent) => {
    event.preventDefault()
  }
  
  return (
    <div className={styles.tambah}>
      <div>
        <h1>Tambah Slik</h1>
        <form onSubmit={onTambah}>
          <TambahInput label="Nama" name="nama" placeholder="Masukkan nama..." />
          <TambahInput label="NIK" name="nik" type="number" placeholder="Masukkan NIK..." />
          <div className={styles.actions}>
            <button>Tambah</button>
            <button>Batal</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TambahPage