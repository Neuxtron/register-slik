import { FormEvent, createRef } from "react"
import TambahInput from "./TambahInput"
import styles from "./styles.module.scss"
import { useNavigate } from "react-router"
import { Slik } from "../../utils/slik"
import getNoSlik from "../../utils/getNoSlik"
import insertSlik from "../../utils/insertSlik"
import { useDispatch } from "react-redux"
import { setLoading, updateListSlik } from "../../state/slices/slik"
import fetchSlik from "../../utils/fetchSlik"

function TambahPage() {
  const navigate = useNavigate()
  const namaRef = createRef<HTMLInputElement>()
  const nikRef = createRef<HTMLInputElement>()
  const dispatch = useDispatch()

  async function insertSlikUpdate(slik: Slik) {
    dispatch(setLoading(true))
    await insertSlik(slik)
    dispatch(setLoading(false))

    dispatch(setLoading(true))
    const data = await fetchSlik()
    dispatch(updateListSlik(data))
  }
  
  const onTambah = async (event: FormEvent) => {
    event.preventDefault()

    const noSlik = await getNoSlik()
    const slik: Slik = {
      tanggal: new Date(),
      nama: namaRef.current!.value,
      nik: parseInt(nikRef.current!.value),
      noSlik
    }
    insertSlikUpdate(slik)
    
    navigate("/")
  }
  const onBatal = () => {
    navigate("/")
  }
  
  return (
    <div className={styles.tambah}>
      <div>
        <h1>Tambah Slik</h1>
        <form onSubmit={onTambah}>
          <TambahInput ref={namaRef} label="Nama" name="nama" placeholder="Masukkan nama..." />
          <TambahInput ref={nikRef} label="NIK" name="nik" type="number" placeholder="Masukkan NIK..." />
          <div className={styles.actions}>
            <button>Tambah</button>
            <button type="button" onClick={onBatal}>Batal</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TambahPage