import { FormEvent, createRef } from "react"
import FormInput from "./FormInput"
import styles from "./styles.module.scss"
import { useNavigate } from "react-router"
import { Slik } from "../../utils/slik"
import getNoSlik from "../../utils/getNoSlik"
import insertSlik from "../../utils/insertSlik"
import { useDispatch } from "react-redux"
import { setLoading, updateListSlik } from "../../state/slices/slik"
import fetchSlik from "../../utils/fetchSlik"
import { useParams } from "react-router-dom"
import useSlikById from "../../hooks/useSlikById"
import FormActions from "./FormActions"
import updateSlik from "../../utils/updateSlik"
import deleteSlik from "../../utils/deleteSlik"

function SlikPage() {
  const navigate = useNavigate()
  const namaRef = createRef<HTMLInputElement>()
  const nikRef = createRef<HTMLInputElement>()
  const tglRef = createRef<HTMLInputElement>()
  const norRegRef = createRef<HTMLInputElement>()
  const dispatch = useDispatch()
  const { idSlik } = useParams()
  const slik = useSlikById(idSlik)
  const tglSlik = slik?.tanggal.toISOString().split("T")[0]

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
      noSlik,
    }
    insertSlikUpdate(slik)

    navigate("/")
  }
  const onBatal = () => {
    navigate("/")
  }

  const onEdit = async (event: FormEvent) => {
    event.preventDefault()

    const slikBaru: Slik = {
      id: parseInt(idSlik!),
      tanggal: new Date(tglRef.current!.value),
      nama: namaRef.current!.value,
      nik: parseInt(nikRef.current!.value),
      noSlik: parseInt(norRegRef.current!.value)
    }
    
    dispatch(setLoading(true))
    await updateSlik(slikBaru)
    dispatch(setLoading(false))

    dispatch(setLoading(true))
    const data = await fetchSlik()
    dispatch(updateListSlik(data))

    navigate("/")
  }

  const onHapus = async () => {
    dispatch(setLoading(true))
    await deleteSlik(parseInt(idSlik!))
    dispatch(setLoading(false))

    dispatch(setLoading(true))
    const data = await fetchSlik()
    dispatch(updateListSlik(data))
   
    navigate("/")
  }

  return (
    <div className={styles.tambah}>
      <div>
        <h1>{idSlik ? "Edit Slik" : "Slik Baru"}</h1>
        <form onSubmit={idSlik ? onEdit : onTambah}>
          <FormInput
            ref={namaRef}
            label="Nama"
            name="nama"
            placeholder="Masukkan nama..."
            value={slik?.nama}
          />
          <FormInput
            ref={nikRef}
            label="NIK"
            name="nik"
            type="number"
            placeholder="Masukkan NIK..."
            value={slik?.nik.toString()}
          />
          {idSlik ? (
            <>
              <FormInput
                ref={tglRef}
                label="Tanggal"
                name="tgl"
                type="date"
                value={tglSlik}
              />
              <FormInput
                ref={norRegRef}
                label="Nomor Registrasi"
                name="no-reg"
                type="number"
                placeholder="Masukkan nomor regitrasi..."
                value={slik?.noSlik.toString()}
              />
            </>
          ) : null}
          <FormActions
            isEdit={idSlik !== undefined}
            onBatal={onBatal}
            onHapus={onHapus}
          />
        </form>
      </div>
    </div>
  )
}

export default SlikPage
