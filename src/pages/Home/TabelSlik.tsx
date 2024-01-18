import { Slik } from "../../utils/slik"
import SlikItem from "./SlikItem"
import styles from "./styles.module.scss"

interface Props {
  listSlik: Slik[]
}

function TabelSlik({ listSlik }: Props) {
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
        {listSlik.map((slik) => {
          const key = crypto.randomUUID()
          return <SlikItem key={key} slik={slik} />
        })}
      </tbody>
    </table>
  )
}

export default TabelSlik
