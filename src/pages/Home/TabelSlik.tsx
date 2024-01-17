import { dummySlik } from "../../utils/slik"
import SlikItem from "./SlikItem"
import styles from "./styles.module.scss"

function TabelSlik() {
  return (
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
          return <SlikItem key={key} slik={slik} />
        })}
      </tbody>
    </table>
  )
}

export default TabelSlik
