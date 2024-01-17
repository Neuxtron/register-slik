import { useNavigate } from "react-router"
import styles from "./styles.module.scss"
import { IoFilter } from "react-icons/io5"
import { FormEvent, createRef, useState } from "react"
import FilterContainer from "./FilterContainer"

type Slik = {
  tanggal: Date
  nama: string
  noSlik: number
  nik: string
}

const dummySlik: Slik[] = [
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: "1271031905030004",
  },
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: "1271031905030004",
  },
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: "1271031905030004",
  },
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: "1271031905030004",
  },
]

function HomePage() {
  const navigate = useNavigate()
  const [showFilter, setShowFilter] = useState(false)
  const cariRef = createRef<HTMLInputElement>()
  const filterRef = createRef<HTMLFormElement>()

  function getNomorRegistrasi(tanggal: Date): string {
    // TODO: ambil nomor slik
    const slikRaw = 0
    const noSlik = ("000" + slikRaw).slice(-3)
    const bulan = ("00" + (tanggal.getMonth() + 1)).slice(-2)
    const tahun = tanggal.getFullYear()

    return `${noSlik}/AAA/123/${bulan}/${tahun}`
  }

  const onTambah = () => {
    navigate("/tambah")
  }

  const toggleFilter = () => {
    setShowFilter((prev) => !prev)
  }

  const cari = (tgl: string = "", bln: string = "", thn: string = "") => {
    const cariText = cariRef.current!.value

    console.log(tgl)
    console.log(bln)
    console.log(thn)
    console.log(cariText)
  }
  const onCari = (event: FormEvent) => {
    event.preventDefault()
    if (!showFilter) {
      cari()
      return
    }
    filterRef.current?.requestSubmit()
  }

  return (
    // TODO: refactor
    <div className={styles.home}>
      <h1 className={styles.pageTitle}>Registrasi Slik</h1>

      {/* TODO: search functionality */}
      <form className={styles.filter} onSubmit={onCari}>
        <input
          type="text"
          placeholder="Cari Nama / NIK / Nomor Registrasi..."
          ref={cariRef}
        />
        <button
          className={styles.filterBtn}
          onClick={toggleFilter}
          type="button"
        >
          <IoFilter />
        </button>
        {!showFilter ? <button className={styles.cari}>Cari</button> : null}
      </form>

      <FilterContainer showFilter={showFilter} cari={cari} ref={filterRef} />

      <button className={styles.add} onClick={onTambah}>
        + Tambah
      </button>

      <table className={styles.tabelSlik}>
        <thead>
          <tr>
            <td>Tanggal</td>
            <td>Nama</td>
            <td>Nomor Registrasi Slik</td>
            <td>NIK</td>
          </tr>
        </thead>
        <tbody>
          {dummySlik.map((slik) => {
            const key = crypto.randomUUID()
            return (
              <tr key={key}>
                <td>{slik.tanggal.toLocaleDateString()}</td>
                <td>{slik.nama}</td>
                <td>{getNomorRegistrasi(slik.tanggal)}</td>
                <td>{slik.nik}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage
