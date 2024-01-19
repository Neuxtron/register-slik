import { useNavigate } from "react-router"
import styles from "./styles.module.scss"
import { createRef, useRef, useState } from "react"
import FilterContainer from "./FilterContainer"
import FilterSlik from "./FilterSlik"
import TabelSlik from "./TabelSlik"
import useSlik from "../../hooks/useSlik"
import getNomorRegistrasi from "../../utils/getNomorRegistrasi"
import { Slik } from "../../utils/slik"

function HomePage() {
  const navigate = useNavigate()
  const [showFilter, setShowFilter] = useState(false)
  const { listSlik, loading } = useSlik()
  const isSearching = useRef(false)
  const [filteredSlik, setFilteredSlik] = useState<Slik[]>([])
  const cariRef = createRef<HTMLInputElement>()
  const filterRef = createRef<HTMLFormElement>()

  const onTambah = () => {
    navigate("/tambah")
  }
  const stopSearching = () => {
    isSearching.current = false
    setFilteredSlik([])
  }

  const cari = (tgl: string = "", bln: string = "", thn: string = "") => {
    const cariText = cariRef.current!.value
    
    const filtered = listSlik.filter((slik) => {
      if (!filterText(slik, cariText)) return false
      if (showFilter && !filterTanggal(slik, tgl, bln, thn)) return false
      return true
    })
    setFilteredSlik(filtered)

    isSearching.current = true
  }

  function filterText(slik: Slik, text: string) {
    if (text === "") return true
    const noRegistrasi = getNomorRegistrasi(slik.tanggal, slik.noSlik)
    const nik = slik.nik.toString()

    const containsNama = slik.nama
      .toLocaleLowerCase()
      .includes(text.toLowerCase())
    const containsNoSlik = noRegistrasi
      .toLocaleLowerCase()
      .includes(text.toLowerCase())
    const containsNik = nik
      .toLocaleLowerCase()
      .includes(text.toLowerCase())

    if (containsNama || containsNoSlik || containsNik) return true
    return false
  }

  function filterTanggal(slik: Slik, tgl: string, bln: string, thn: string) {
    const matchDate = tgl !== "" ? parseInt(tgl) === slik.tanggal.getDate() : true
    const matchMonth = bln !== "" ? parseInt(bln) === slik.tanggal.getMonth() : true
    const matchYear = thn !== "" ? parseInt(thn) === slik.tanggal.getFullYear() : true

    if (matchDate && matchMonth && matchYear) return true
    return false
  }

  if (loading) return "Loading..."

  return (
    <div className={styles.home}>
      <h1 className={styles.pageTitle}>Registrasi Slik</h1>

      <FilterSlik
        ref={cariRef}
        cari={cari}
        filterRef={filterRef}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        stopSearching={stopSearching}
      />

      <FilterContainer showFilter={showFilter} cari={cari} ref={filterRef} />

      <button className={styles.add} onClick={onTambah}>
        + Tambah
      </button>

      <TabelSlik listSlik={isSearching.current ? filteredSlik : listSlik} />
    </div>
  )
}

export default HomePage
