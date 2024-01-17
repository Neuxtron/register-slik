import { useNavigate } from "react-router"
import styles from "./styles.module.scss"
import { createRef, useState } from "react"
import FilterContainer from "./FilterContainer"
import FilterSlik from "./FilterSlik"
import TabelSlik from "./TabelSlik"

function HomePage() {
  const navigate = useNavigate()
  const [showFilter, setShowFilter] = useState(false)
  const cariRef = createRef<HTMLInputElement>()
  const filterRef = createRef<HTMLFormElement>()

  const onTambah = () => {
    navigate("/tambah")
  }

  const cari = (tgl: string = "", bln: string = "", thn: string = "") => {
    const cariText = cariRef.current!.value

    {
      /* TODO: search functionality */
    }
    console.log(tgl)
    console.log(bln)
    console.log(thn)
    console.log(cariText)
  }

  return (
    <div className={styles.home}>
      <h1 className={styles.pageTitle}>Registrasi Slik</h1>

      <FilterSlik
        ref={cariRef}
        cari={cari}
        filterRef={filterRef}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />

      <FilterContainer showFilter={showFilter} cari={cari} ref={filterRef} />

      <button className={styles.add} onClick={onTambah}>
        + Tambah
      </button>

      <TabelSlik />
    </div>
  )
}

export default HomePage
