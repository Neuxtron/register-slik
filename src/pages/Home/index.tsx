import { useNavigate } from "react-router"
import styles from "./styles.module.scss"
import { IoFilter } from "react-icons/io5";

type Slik = {
  tanggal: Date
  nama: string
  noSlik: number
  nik: number
}

const dummySlik: Slik[] = [
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: 1271031905030004,
  },
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: 1271031905030004,
  },
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: 1271031905030004,
  },
  {
    tanggal: new Date(2024, 0, 16),
    nama: "zuzuzu",
    noSlik: 0,
    nik: 1271031905030004,
  },
]

function HomePage() {
  const navigate = useNavigate()

  function getNomorRegistrasi(tanggal: Date): string {
    // TODO: ambil nomor slik
    const slikRaw = 0
    const noSlik = ("00" + slikRaw).slice(-2)
    const bulan = ("00" + (tanggal.getMonth() + 1)).slice(-2)
    const tahun = tanggal.getFullYear()

    return `${noSlik}/AAA/123/${bulan}/${tahun}`
  }

  const onTambah = () => {
    navigate("/tambah")
  }

  const toggleFilter = () => {
    console.log("AAAAAAAAA")
    
  }

  return (
    // TODO: refactor
    <div className={styles.home}>
      <h1 className={styles.pageTitle}>Registrasi Slik</h1>

      {/* TODO: search functionality */}
      <div className={styles.filter}>
        <input type="text" placeholder="Cari Nama / NIK / Nomor Registrasi..." />
        <button className={styles.filter} onClick={toggleFilter}>
          <IoFilter />
        </button>
      </div>

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
            return (
              <tr>
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
