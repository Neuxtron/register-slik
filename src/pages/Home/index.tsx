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

    {
      /* TODO: filter date functionality */
    }

    const filtered = listSlik.filter((slik) => {
      const noRegistrasi = getNomorRegistrasi(slik.tanggal, slik.noSlik)
      const nik = slik.nik.toString()

      const containsNama = slik.nama
        .toLocaleLowerCase()
        .includes(cariText.toLowerCase())
      const containsNoSlik = noRegistrasi
        .toLocaleLowerCase()
        .includes(cariText.toLowerCase())
      const containsNik = nik
        .toLocaleLowerCase()
        .includes(cariText.toLowerCase())

      if (containsNama || containsNoSlik || containsNik) return true
      return false
    })
    setFilteredSlik(filtered)

    console.log(filteredSlik)

    isSearching.current = true
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
