import { useState } from "react"
import styles from "./styles.module.scss"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material"

interface Props {
  isEdit: boolean
  onBatal: () => void
  onHapus: () => void
}

function FormActions({ isEdit, onBatal, onHapus }: Props) {
  const [isDelete, setDelete] = useState(false)

  const openDelte = () => {
    setDelete(true)
  }
  const closeDelete = () => {
    setDelete(false)
  }
  const confirmDelete = () => {
    onHapus()
    closeDelete()
  }

  if (isEdit) {
    return (
      <>
        <Dialog open={isDelete} onClose={closeDelete} className={styles.dialog}>
          <DialogContent>
            <DialogContentText>
              Apakah Anda ingin menghapus <br />
              Slik ini?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDelete}>Batal</Button>
            <Button onClick={confirmDelete}>Hapus</Button>
          </DialogActions>
        </Dialog>

        <div className={styles.actions}>
          <button className={styles.submitBtn}>Simpan</button>
          <button className={styles.cancelBtn} type="button" onClick={onBatal}>
            Batal
          </button>
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={openDelte}
          >
            Hapus
          </button>
        </div>
      </>
    )
  }
  return (
    <div className={styles.actions}>
      <button className={styles.submitBtn}>Tambah</button>
      <button className={styles.cancelBtn} type="button" onClick={onBatal}>
        Batal
      </button>
    </div>
  )
}

export default FormActions
